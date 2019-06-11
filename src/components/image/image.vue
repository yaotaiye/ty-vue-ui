<template>
    <div class="el-image">
        <slot v-if="loading" name="placeholder">
            <div class="el-image__placeholder"></div>
        </slot>
        <slot v-else-if="error" name="error">
            <div class="el-image__error">加载失败</div>
        </slot>
        <img v-else
              class="el-image__inner"
              v-bind="$attrs"
              v-on="$listeners"
              :src="src"
              :style="imageStyle"
              :class="{'el-images__inner--center':alignCenter}"
         >
    </div>
</template>

<script>
    import {isString,isHtmlElement} from "../utils/types";
    import {on,off,getScrollContainer, isInContainer } from '../utils/dom';
    import {throttle} from 'throttle-debounce';
    const objectFit={
        NONE:'none',
        CONTAIN:'contain',
        COVER:"cover",
        FILL:"fill",
        SCALE_DOWN:"scale-down",
    }
    const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined;
    export default {
        name: "TyImage",
        inheritAttrs:false,
        props:{
            src:String,
            fit:String,
            lazy:Boolean,
            scrollContainer:{},
        },
        data(){
            return{
                loading:true,
                error:false,
                show:!this.lazy,
                imageWidth:0,
                imageHeight:0
            }
        },
        computed:{
            imageStyle(){
             const {fit}=this;
             if(!this.$isServer&&fit){
                 return isSupportObjectFit()?{ 'object-fit': fit }:this.getImageStyle(fit);
             }
             return {};
            },
            alignCenter() {
                return !this.$isServer && !isSupportObjectFit() && this.fit !== ObjectFit.FILL;
            }
        },
        watch:{
            src(val){
                this.show && this.loadImage();
            },
            show(val){
                val&&this.loadImage();
            }
        },
        mounted(){
            if(this.lazy){
                this.addLazyLoadListener();
            }else{
                this.loadImage();
            }
        },
        beforeDestroy(){
            this.lazy&&this.removeLazyLoadListener()
        },
        methods:{
            getImageStyle(fit) {
                const {imageWidth,imageHeight}=this;
                const {
                    clientWidth: containerWidth,
                    clientHeight: containerHeight
                } = this.$el;
                if(!imageWidth||!imageHeight||!containerWidth||!containerHeight) return {};
                const vertical=imageWidth/imageHeight<1;
                if(fit===objectFit.SCALE_DOWN){
                    const isSmaller=imageWidth< containerWidth && imageHeight<containerHeight;
                    fit =isSmaller?objectFit.NONE:objectFit.CONTAIN;
                }
                switch (fit){
                    case objectFit.NONE:
                        return { width:'auto',height:'auto'};
                    case objectFit.CONTAIN:
                        return vertical?{width:'auto'}:{height:'auto'};
                    case objectFit.COVER:
                        return vertical?{height:'auto'}:{width:'auto'};
                    default:
                        return{};
                }

            },
            loadImage(){
                if(this.$isServer) return;
                this.loading=true;
                this.error=false;
                const img=new Image();
                img.onload=e=>this.handleLoad(e,img);
                img.onerror=this.handleError.bind(this);
                Object.keys(this.$attrs)
                    .forEach((key) => {
                        const value = this.$attrs[key];
                        img.setAttribute(key, value);
                    });
                img.src = this.src;
            },
            handleError(e){
                this.loading=false;
                this.error=true;
                this.$emit('error',e)
            },
            handleLoad(e,img){
                this.imageWidth=img.width;
                this.imageHeight=img.height;
                this.loading=false;
            },
            handleLazyLoad(){
                if(isInContainer(this.$el,this._scrollContainer)){
                    this.show=true;
                    this.removeLazyLoadListener();
                }
            },
            addLazyLoadListener() {
                if (this.$isServer) return;
                const {scrollContainer}=this;
                let _scrollContainer=null;

                if(isHtmlElement(scrollContainer)){
                    _scrollContainer=scrollContainer;
                }else if(isString(scrollContainer)){
                    _scrollContainer=document.querySelector(scrollContainer)
                }else{
                    _scrollContainer=getScrollContainer(this.$el)
                }
                if(_scrollContainer){
                    this._scrollContainer=_scrollContainer;
                    this._lazyLoadHandler=throttle(200,this.handleLazyLoad);
                    on(_scrollContainer,'scroll',this._lazyLoadHandler);
                    this.handleLazyLoad();
                }
            },
            removeLazyLoadListener(){
                const {_scrollContainer,_lazyLoadHandler}=this;
                if (this.$isServer || !_scrollContainer || !_lazyLoadHandler) return;
                off(_scrollContainer, 'scroll', _lazyLoadHandler);
                this._scrollContainer = null;
                this._lazyLoadHandler = null;
            }
        }
    }
</script>

<style scoped>

</style>