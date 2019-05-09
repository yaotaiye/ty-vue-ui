<template>
    <div class="ty-pagination " :class="{'is-background':background}">
        <span class="ty-pagination__total" v-if="getPanels('total')">共 {{total}} 条</span>
        <button v-if="getPanels('prev')" @click="prev" type="button" :disabled="current==1" class="btn-prev"><i class="iconfont icon-back"></i></button>
        <ul class="ty-pager">
            <li class="more " v-if="showPrevMore">...</li>
            <li v-for="pager in pagers" :key="pager" @click="jump(pager)"    :class="{ active: current === pager, disabled }" class="number">{{pager}}</li>
            <li class="more " v-if="showNextMore">...</li>
        </ul>
        <button  v-if="getPanels('next')"  @click="next" type="button" class="btn-next"  :disabled="current==pages"><i class="iconfont icon-more"></i></button>
        <span v-if="getPanels('jumper')"  class="ty-pagination__jump" >
             <input type="number" v-model="goIndex" autocomplete="off" min="1" max="10" style="width: 40px;">
             <span class="submit" @click="jump(goIndex-0)">GO</span>
        </span>
    </div>
</template>

<script>
    export default {
        name: "TyPagination",
        data(){
            return{
                current: this.currentPage,
                showPrevMore: false,
                showNextMore: false,
                goIndex:this.currentPage,
                panels:[]
            }
        },
        props: {
            pageSize: { //每页多少条数据
                type: Number,
                default: 10
            },
           // small: Boolean,
            total: Number,//总数
       //     pageCount: Number, //分页总数
            pagerCount: {  //显示分页数量
                type: Number,
                validator(value) {  //大于等于 5 且小于等于 21 的奇数
                    return (value | 0) === value && value > 4 && value < 22 && (value % 2) === 1;
                },
                default: 7
            },
            currentPage: { //初始化当前页
                type: Number,
                default: 1
            },
           /* pageSizes: {
                type: Array,
                default() {
                    return [10, 20, 30, 40, 50, 100]
                }
            },*/
            layout: { //控制显示区域
                type:String,
                default: 'prev,next'
            },
            //popperClass: String,
          //  prevText: String,//代替图标的文字
          //  nextText: String,
            disabled: Boolean,//是否禁用按钮
            background: Boolean, //是否添加背景按钮
        },
        computed:{
            //计算总页码
            pages(){
                return Math.ceil(this.total / this.pageSize)
            },
            pagers(){
                const arr=[];
                const pagerCount=this.pagerCount;//每页分页按钮数量
                const pageCount=this.pages;//总页数
                let   current=this.current;//当前页数
                const _offset= (pagerCount - 1)/2;
                const offset={
                    start:current-_offset,
                    end:current+_offset
                }
                //页码计算
                if(offset.start<1){
                    offset.end=pagerCount; //当前页小于pagerCount一半，end设置为分页按钮数量
                    offset.start=1;
                }
                if(offset.end>pageCount){ //当前页大于页总数
                    offset.start=offset.start-(offset.end-pageCount);
                    offset.end=pageCount;
                }
                if (offset.start < 1) offset.start = 1;

                this.showPrevMore=(offset.start>1);
                this.showNextMore=(offset.end<pageCount);


                for (let i = offset.start; i <= offset.end; i++) {
                    arr.push(i)
                }

                return arr;

            },
        },
        methods:{
            jump(n){
                if(this.current!=n && n>0 && n<this.pages+1){
                    this.current=n;
                    this.$emit('pageChange', this.current);
                }
            },
            prev(){
                this.jump(this.current-1)
            },
            next(){
                this.jump(this.current+1)
            },
            getPanels(name){
                if(!name) return false;
                return this.panels.includes(name);
            }
        },

        mounted(){
            this.panels= this.layout.split(',').map((item) => item.trim());
        }
    }
</script>

<style scoped>

</style>