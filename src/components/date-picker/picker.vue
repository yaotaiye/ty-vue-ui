<template>
        <div class="ty-date-editor ty-input"   @keydown="handleKeydown">
            <input   type="text" ref="reference" class=" ty-input__inner" @focus="handleFocus" v-model="chooseDate" :placeholder="placeholder" >
        </div>

</template>

<script>
    import Vue from 'vue';
    import date from './panel/date';
   // import Clickoutside from '../utils/clickoutside';

    export default {
        name: "TyPicker",
       // directives: { Clickoutside },
        data(){
            return {
                visible:true,
                chooseDate:this.tyDate||''
            }
        },
        props:{
            placeholder:{
                default:'选择日期'
            },
            tyDate:String

        },
        components:{
            date
        },
        computed:{
            reference() {
                const reference = this.$refs.reference;
                return reference.$el || reference;
            },
            getDate(){
                if(this.tyDate&&this.tyDate.length>=9){
                    return new  Date(this.tyDate.replace(/-/g,"/"))
                }else{
                    return new  Date()
                }

            }
        },
        methods:{
            DatePick(obj){
                this.chooseDate=`${obj.year}-${obj.month+1}-${obj.day}`;
                this.picker.visible=this.visible=obj.visible;
                this.picker.lastDate=new Date(obj.year,obj.month,obj.day);
            },
            handleFocus(){
                this.visible=true;
                this.showPicker();
            },
            mountPicker(){

               /* var mixin = {
                    data: function () {
                        return {
                            message: 'hello',
                            foo: 'abc'
                        }
                    }
                }
                date.mixins=[mixin];*/

                this.picker = new Vue(date).$mount();
                this.picker.visible=this.visible;
                this.picker.lastDate=this.getDate; //传入输入框日期
                this.picker.$on('DatePick',(obj)=>{
                    this.DatePick(obj)
                });
                this.changePos();
                document.querySelector("body").appendChild(this.picker.$el);

            },
            unmountPicker() {
                if (this.picker) {
                    this.picker.$destroy();
                    this.picker.$off();
                    document.querySelector("body").removeChild(this.picker.$el);
                }
            },
            showPicker() {
                if (this.$isServer) {return };
                if (!this.picker) {
                    this.mountPicker();
                }else{
                    this.changePos();
                    this.picker.visible=this.visible;
                }
            },
            hidePicker(){
                if(this.picker){
                    this.picker.visible=this.visible= false;
                }

            },
            changePos(){
                const refInput=this.reference.getBoundingClientRect(),winH=window.innerHeight;
                var top=refInput.top+40;
                if(top+334>winH){
                    top=winH-334;
                }
                this.picker.$el.style.cssText=`top:${top}px;left:${refInput.left}px;z-index:999;position:absolute`;
            },
            handleKeydown(){
                const keyCode = event.keyCode;
                // ESC
                if (keyCode === 27) {
                    this.hidePicker();
                    event.stopPropagation();
                    return;
                }
            },
            handleClose(){
                this.hidePicker();
            }
        },
        mounted(){
           /* window.onresize=()=>{
                this.changePos()
            }*/
        }
    }
</script>
