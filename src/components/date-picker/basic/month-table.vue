<template>
    <table class="ty-month-table" @click="handleMonthTableClick" >
        <tbody>
        <tr v-for="(row, key) in rows" :key="key">
            <td :class="[{'current':cell.month==(date.getMonth()+1)&& date.getFullYear()==lastDate.getFullYear()},{'today':cell.month==(nowDate.getMonth()+1) && date.getFullYear()==nowDate.getFullYear()}]"   v-for="(cell, key) in row" :key="key">
                <div><a class="cell" :data-month="cell.month">{{cell.text}}</a></div>
            </td>
        </tr>

        </tbody>
    </table>
</template>

<script>
    export default {
        name: "month-table",
      /*  data(){
            return{
                chooseMonth:date.getMonth()+1
            }
        },*/
        props: {
            date:{}
            ,nowDate:{}
            ,lastDate:{}
        },
        methods:{
            changeMonth(m){
                var tem='';
                switch (m){
                    case 1: tem='一'; break;
                    case 2: tem='二'; break;
                    case 3: tem='三'; break;
                    case 4: tem='四'; break;
                    case 5: tem='五'; break;
                    case 6: tem='六'; break;
                    case 7: tem='七'; break;
                    case 8: tem='八'; break;
                    case 9: tem='九'; break;
                    case 10: tem='十'; break;
                    case 11: tem='十一'; break;
                    case 12: tem='十二'; break;
                }
                return tem+'月'

            },
            handleMonthTableClick(event) {
                const target = event.target;
                if (target.tagName === 'A') {
                     var month = target.getAttribute("data-month")-1;
                     this.$emit('pick', month);
                     this.chooseMonth=month
                }
            }

        },
        computed:{
            rows() {
                var arr=[],temArr=[];
                for (let i=1;i<=12;i++){
                    temArr.push({month:i,text:this.changeMonth(i)});
                    if(i%4==0){
                        arr.push(temArr);
                        temArr=[];
                    }
                }
                return arr;

            }
        }
    }
</script>

