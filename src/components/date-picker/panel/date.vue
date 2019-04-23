<template>
    <transition name="ty-zoom-in-top" @after-enter="handleEnter" @after-leave="handleLeave">
        <div class="ty-picker-panel ty-date-picker" ref="date"  v-show="visible">
            <div class="ty-date-picker__header">
                <button @click="prevYearHandle"type="button" aria-label="前一年" class="ty-picker-panel__icon-btn ty-date-picker__prev-btn ">
                    <i class=" iconfont icon-back"></i>
                </button>
                <button v-show="currentView === 'date'" @click="prevMonthHandle" type="button" aria-label="上个月" class="ty-picker-panel__icon-btn ty-date-picker__prev-btn ">
                    <i class=" iconfont icon-back"></i>
                </button>
                <span role="button" class="ty-date-picker__header-label" @click="showYearPicker">{{ yearLabel}}</span>
                <span role="button" class="ty-date-picker__header-label" @click="showMonthPicker"  v-show="currentView === 'date'">{{ monthLabel}}月</span>
                <button @click="nextYearHandle" type="button" aria-label="后一年" class="ty-picker-panel__icon-btn ty-date-picker__next-btn ">
                    <i class=" iconfont icon-more"></i>
                </button>
                <button v-show="currentView === 'date'" @click="nextMonthHandle" type="button" aria-label="下个月" class="ty-picker-panel__icon-btn ty-date-picker__next-btn ">
                    <i class=" iconfont icon-more"></i>
                </button>
            </div>
            <div class="ty-picker-panel__content">
                <DateTable :nowDate="nowDate" @pick="handleDatePick" :lastDate="lastDate" :date="date" v-show="currentView === 'date'"></DateTable>
                <YearTable :nowDate="nowDate" @pick="handleYearPick" :date="date" v-show="currentView === 'year'"></YearTable>
                <MonthTable :nowDate="nowDate" @pick="handleMonthPick" :lastDate="lastDate" :date="date" v-show="currentView === 'month'"></MonthTable>
            </div>
        </div>
    </transition>
</template>

<script>
    import DateTable from '../basic/date-table';
    import YearTable from '../basic/year-table';
    import MonthTable from '../basic/month-table';
    export default {
        name: "date",
        props:{
         // tyDate:String
        },
        data(){
            return{
                visible:false,//显示与隐藏
                lastDate:new Date(),//上次选中的日期
                nowDate:new Date(),//当天日期
                date:new Date(),//正在操作的日期
                currentView: 'date',//显示的版面
            }
        },
        components:{
             DateTable
            ,YearTable
            ,MonthTable
        },
        computed: {
            year() {
                return this.date.getFullYear();
            },

            month() {
                return this.date.getMonth();
            },

            monthDate() {
                return this.date.getDate();
            },

            yearLabel(){
                var now=this.year+'年';
                if (this.currentView === 'year') {
                    now='';
                    var startYear = Math.floor(this.year / 10) * 10;
                    now+=startYear+'年'+'-'+(startYear + 9)+'年';
                }
                return now;
            },
            monthLabel(){
                return this.month+1;
            }
        },
        methods:{
            showMonthPicker() {
                this.currentView = 'month';
            },

            showYearPicker() {
                this.currentView = 'year';
            },
            handleEnter() {
                document.body.addEventListener('keydown', this.handleKeydown);
            },

            handleLeave() {
                document.body.removeEventListener('keydown', this.handleKeydown);
            },
            handleKeydown(event) {
                const keyCode = event.keyCode;
                const list = [38, 40, 37, 39];
               // console.log(keyCode)
            },
            modifyDate(year=this.year,month=this.month){
             this.date= new Date(year,month);
            },

            prevYearHandle(){
                if(this.currentView=='year'){
                    this.modifyDate(this.year-9,this.month);
                }else{
                    this.modifyDate(this.year-1,this.month);

                }

            },
            nextYearHandle(){
                if(this.currentView=='year'){
                    this.modifyDate(this.year+9,this.month);
                }else{
                    this.modifyDate(this.year+1,this.month);
                }

            },
            prevMonthHandle(){
                var month=this.month-1==-1?11:this.month-1,year=this.year;
                if(month==11){
                    year-=1;
                }
                this.modifyDate(year,month);
            },
            nextMonthHandle(){
               var  month=this.month+1==12?0:this.month+1,year=this.year;
                if(month==0){
                    year+=1;
                }
                this.modifyDate(year,month);
            },
            handleMonthPick(month) {
                this.modifyDate(this.year,month);
                this.currentView = 'date';

            },
            handleDatePick(obj) {
                this.modifyDate(obj.year,obj.month);
                obj.visible=false;
                this.$emit("DatePick",obj);
            },
            handleYearPick(year) {
                this.modifyDate(year);
                this.currentView = 'month';
            }
        },
        mounted(){

        },
        watch:{
            lastDate:function (val, oldVal) {
                //传入新的值
                this.date=val;
            }
        }
    }
</script>

<style scoped>

</style>