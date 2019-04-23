<template>
    <table class="ty-year-table" @click="handleYearTableClick">
        <tbody>
        <tr v-for="item in yearArr">
            <td class="available" :class="[{'current':item2==chooseYear},{'today':item2==nowDate.getFullYear()}]" v-for="item2 in item"><a class="cell">{{item2}}</a></td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "year-table",
        data(){
            return{
                chooseYear:this.currYear
            }
        },
        props: {
            date:{}
            ,nowDate:{}
        },
        computed: {
            currYear(){
               return this.date.getFullYear()
            },
            startYear() {
                return Math.floor(this.date.getFullYear() / 10) * 10;
            },
            yearArr(){
                const year=this.startYear;
                var arr=[],temArr=[];
                for (let i=0;i<12;i++){
                    if(i<10){ temArr.push(year+i);}
                    if((i+1)%4==0&&i!=0){
                      arr.push(temArr);
                        temArr=[];
                    }
                }

                return arr;
            }
        },
        methods:{
            handleYearTableClick(event) {
                const target = event.target;
                if (target.tagName === 'A') {
                    const year = target.textContent || target.innerText;
                    this.$emit('pick', year);
                    this.chooseYear=year
                }
            }
        }
    }
</script>

