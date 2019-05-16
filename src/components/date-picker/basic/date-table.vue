<template>
    <table cellspacing="0" cellpadding="0" class="ty-date-table" @click="handleDatePick">
        <tbody>
        <tr><th v-for="(week, key) in WEEKS" :key="key">{{ week }}</th></tr>
        <tr class="ty-date-table__row"  v-for="(item, key) in rows" :key="key">

                <td  v-for="(item1, key1) in item" :key="key1" :class="[
                {'prev-month':item1.class=='prev'},
                {'available':item1.class=='cur'},
                {'current':item1.day==chooseDay&&item1.class=='cur'&&date.getFullYear()==lastDate.getFullYear()&&date.getMonth()==lastDate.getMonth()},
                {'next-month':item1.class=='next'},
                {'today':nowDate.getDate()==item1.day && item1.class=='cur'&& date.getFullYear()==nowDate.getFullYear() && date.getMonth()==nowDate.getMonth()}
                ]">
                    <div><span>{{item1.day}}</span></div>
                </td>
        </tr>

        </tbody>
    </table>
</template>

<script>
    const WEEKS = ['日', '一', '二', '三', '四', '五', '六'];
    export default {
        name: "date-table",
        props: {
            firstDayOfWeek: {
                default: 7,
                type: Number,
                validator: val => val >= 1 && val <= 7
            },
            date:{}
            ,nowDate:{}
            ,lastDate:{}
        },
        data(){
            return{
                rows:[]
                ,chooseDay:''
            }
        },
        computed: {
            WEEKS() {
                const week = this.firstDayOfWeek;
                return WEEKS.concat(WEEKS).slice(week, week + 7);
            }

         },
        methods:{
            fillDate(year,month){
                //本月份第一天是星期几-为显示上个月的天数做铺垫
                var first_day = new Date(year,month,1).getDay();
                    //如果刚好是星期天，则空出一行（显示上个月的天数）
                    first_day = first_day == 0?7:first_day;
                //本月份最后一天是几号
              var  final_date = new Date(year,month+1,0).getDate(),
                    //上个月的最后一天是几号
                    last_date = new Date(year,month,0).getDate(),
                    //剩余的格子数--即排在末尾的格子数
                    surplus = 42 - first_day - final_date;
                /*填充日历执行
                ---------------------------*/
                var arr = [];
                //上个月的显示天数
                for(let i=0;i<first_day;i++){
                    arr.push({day:last_date-(first_day-1)+i,class:'prev'})
                }
                //本月的显示天数
                for(let j=0;j<final_date;j++){
                    arr.push({day:j+1,class:'cur'});
                }
                //下个月的显示天数
                for(let k=0;k<surplus;k++){
                    arr.push({day:k+1,class:'next'})
                }

                var newArr=[];
                //一共六周
                var obj=[];
                for(let g=1;g<=arr.length;g++){
                   obj.push(arr[g-1]);
                   if(g%7==0){
                       newArr.push(obj);
                       obj=[];
                   }
                }
                return newArr;


            }
            ,render(){
                this.chooseDay=this.lastDate.getDate();
                this.rows=  this.fillDate(this.date.getFullYear(),this.date.getMonth());
            }
            ,handleDatePick(event){
                const target = event.target;
                if (target.tagName === 'SPAN') {
                    const day = target.textContent || target.innerText;
                    const pNodeCls=target.parentNode.parentNode.getAttribute("class");
                    var month=this.date.getMonth(),year=this.date.getFullYear();
                    const prevM=month-1==-1?11:month-1,nextM=month+1==12?0:month+1;
                    if(pNodeCls=='prev-month'){
                        month=prevM;
                       if(month==11){ year=year-1}
                    }
                    else if(pNodeCls=='next-month'){
                        month=nextM;
                        if(month==0){ year=year+1}
                    }
                    this.$emit('pick',{year:year,month:month,day:day-0});
                    this.chooseDay=day;

                }
            }
          },
        mounted(){
            this.render();
        }
        ,watch:{
            date:function (val, oldVal) {
                this.render();
            }
        }
        }
</script>

<style scoped>

</style>