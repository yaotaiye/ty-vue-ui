<template>
    <div>
        <table class="ty-table">
            <thead>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            </thead>
            <tbody>
             <tr>
                 <td>src</td>
                 <td>图片源</td>
                 <td>string</td>
                 <td>--</td>
                 <td>-</td>
             </tr>
             <tr>
                 <td>fit</td>
                 <td>确定图片如何适应容器框，同原生 object-fit</td>
                 <td>string</td>
                 <td>fill / contain / cover / none / scale-down	</td>
                 <td>-</td>
             </tr>
             <tr>
                 <td>alt</td>
                 <td>原生 alt</td>
                 <td>string</td>
                 <td>--</td>
                 <td>-</td>
             </tr>
             <tr>
                 <td>lazy</td>
                 <td>是否开启懒加载	</td>
                 <td>boolean</td>
                 <td>--</td>
                 <td>false</td>
             </tr>
             <tr>
                 <td>placeholder</td>
                 <td>图片未加载的占位内容</td>
                 <td>string</td>
                 <td>--</td>
                 <td>-</td>
             </tr>
             <tr>
                 <td>error</td>
                 <td>加载失败的内容</td>
                 <td>string</td>
                 <td>--</td>
                 <td>-</td>
             </tr>
            </tbody>
        </table>
        <div class="title">基础用法</div>
        <div class="demo-image">
            <div class="block" v-for="fit in fits" :key="fit">
                <span class="demonstration">{{ fit }}</span>
                <ty-image
                        style="width: 100px; height: 100px"
                        :src="url"
                        :fit="fit"></ty-image>
            </div>
        </div>
        <div class="title">加载失败</div>
        <div class="demo-image__error">
            <div class="block">  <ty-image></ty-image></div>
            <div class="block"><ty-image>
                <div class="image-slot"  slot="error" >
                    <ty-icon name="icon-email"></ty-icon>
                </div>
            </ty-image></div>
        </div>
        <div class="title">懒加载</div>
        <div class="demo-image__lazy">
            <ty-image v-for="url in urls" :key="url" :src="url" lazy></ty-image>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pics",
        data(){
            return{
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                urls: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ]
            }
        },
    }
</script>

<style scoped>

</style>