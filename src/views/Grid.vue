<template>
   <div>
       <div class="title">固定网格</div>
       <p class="describe">
           整个网格系统，一共12格子,通过设置TyCol的 col 属性值，可按比例划分网格。
       </p>
       <div class="bd-example-row mt-10">
           <TyRow >
               <TyCol col="4">
                   <div class="demo-col">col-4</div>
               </TyCol>
               <TyCol col="6">
                   <div class="demo-col">col-6</div>
               </TyCol>
               <TyCol col="2">
                   <div class="demo-col">col-2</div>
               </TyCol>
           </TyRow>
           <TyRow >
               <TyCol col="3">
                   <div class="demo-col">col-3</div>
               </TyCol>
               <TyCol col="2">
                   <div class="demo-col">col-2</div>
               </TyCol>
               <TyCol col="7">
                   <div class="demo-col">col-7</div>
               </TyCol>
           </TyRow>
           <TyRow >
               <TyCol >
                   <div class="demo-col">col-1</div>
               </TyCol>
               <TyCol col="11">
                   <div class="demo-col">col-11</div>
               </TyCol>
           </TyRow>
       </div>
       <div class="title">平分网格</div>
       <p class="describe">传统的12网格，无法做到分为5等分，但这里使用了flex弹性布局，可以设置，在没有设置col的情况下，视为平分网格。</p>
       <div class="bd-example-row mt-10"  >
           <TyRow   >
               <TyCol >
                   <div class="demo-col">50%</div>
               </TyCol>
               <TyCol >
                   <div class="demo-col">50%</div>
               </TyCol>
           </TyRow>
           <TyRow   >
               <TyCol >
                   <div class="demo-col">20%</div>
               </TyCol>
               <TyCol >
                   <div class="demo-col">20%</div>
               </TyCol>
               <TyCol >
                   <div class="demo-col">20%</div>
               </TyCol>
               <TyCol >
                   <div class="demo-col">20%</div>
               </TyCol>
               <TyCol >
                   <div class="demo-col">20%</div>
               </TyCol>
           </TyRow>
       </div>

       <div class="title">设置网格间隙</div>
       <p class="describe">网格固定的间隙有10，15，20像素，在TyRow设置gridSpace的值。</p>
       <div class="bd-example-row mt-10">
           <TyRow  gridSpace="10" >
               <TyCol col="4">
                   <div class="demo-col">grid-space-10</div>
               </TyCol>
               <TyCol col="4">
                   <div class="demo-col">grid-space-10</div>
               </TyCol>
               <TyCol col="4">
                   <div class="demo-col">grid-space-10</div>
               </TyCol>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow  gridSpace="15" >
               <TyCol col="4">
                   <div class="demo-col">grid-space-15</div>
               </TyCol>
               <TyCol col="4">
                   <div class="demo-col">grid-space-15</div>
               </TyCol>
               <TyCol col="4">
                   <div class="demo-col">grid-space-15</div>
               </TyCol>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow  gridSpace="20" >
               <TyCol col="4">
                   <div class="demo-col">grid-space-20</div>
               </TyCol>
               <TyCol col="4">
                   <div class="demo-col">grid-space-20</div>
               </TyCol>
               <TyCol col="4">
                   <div class="demo-col">grid-space-20</div>
               </TyCol>
           </TyRow>
       </div>
       <div class="title">网格水平内容分布</div>
       <p class="describe">
           水平内容布局，通过设置TyRow的justifyContent属性值，可到达居中、靠前、靠后、平均间隙等效果。
       </p>
       <div class="bd-example-row mt-10">
           <TyRow  justifyContent="start" class="bd-highlight" >
               <TyCol col="4">
                   <div class="demo-col">start内容靠前</div>
               </TyCol>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow  justifyContent="center" class="bd-highlight" >
               <TyCol col="4">
                   <div class="demo-col">center内容居中</div>
               </TyCol>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow  justifyContent="end" class="bd-highlight"  >
               <TyCol col="4">
                   <div class="demo-col">end内容靠尾</div>
               </TyCol>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow  justifyContent="between" class="bd-highlight" >
               <TyCol col="3">
                   <div class="demo-col">between内容间距平分</div>
               </TyCol>
               <TyCol col="3">
                   <div class="demo-col">between内容间距平分</div>
               </TyCol>
               <TyCol col="3">
                   <div class="demo-col">between内容间距平分</div>
               </TyCol>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow  justifyContent="around" class="bd-highlight"  >
               <TyCol col="3">
                   <div class="demo-col">around内容左右间距平分</div>
               </TyCol>
               <TyCol col="3">
                   <div class="demo-col">around内容左右间距平分</div>
               </TyCol>
               <TyCol col="3">
                   <div class="demo-col">around内容左右间距平分</div>
               </TyCol>
           </TyRow>
       </div>
       <div class="title">网格垂直内容分布</div>
       <p class="describe"> 垂直内容布局，通过设置TyRow的alignIitems属性值，可到达上下居中、顶对齐、底对齐等效果。</p>
       <div class="bd-example-row mt-10">
           <TyRow class="bd-highlight" style="height: 100px;"  alignIitems="start" >
               <div class="demo-col col-3">start内容靠前</div>
               <div class="demo-col col-3" style="height: 60px;"></div>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow class="bd-highlight" style="height: 100px;"  alignIitems="center" >
               <div class="demo-col col-3">center</div>
               <div class="demo-col col-3" style="height: 60px;"></div>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow class="bd-highlight" style="height: 100px;"  alignIitems="baseline" >
               <div class="demo-col col-3">baseline</div>
               <div class="demo-col col-3" style="height: 60px;"></div>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow class="bd-highlight" style="height: 100px;"  alignIitems="end" >
               <div class="demo-col col-3">end</div>
               <div class="demo-col col-3" style="height: 60px;"></div>
           </TyRow>
       </div>
       <div class="bd-example-row mt-10">
           <TyRow class="bd-highlight" alignIitems="stretch" style="height: 100px;"   >
               <div class="demo-col col-3">stretch</div>
               <div class="demo-col col-3" style="height: 60px;"></div>
           </TyRow>
       </div>
   </div>
</template>

<script>
    export default {
        name: "Grid"
    }
</script>

<style scoped>

</style>