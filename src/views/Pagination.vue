<template>
    <div>
        <div class="title">分页组件参数</div>
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
                <td>background	</td>
                <td>是否为分页按钮添加背景色	</td>
                <td>boolean</td>
                <td>--</td>
                <td>false</td>
            </tr>
            <tr>
                <td>pageSize	</td>
                <td>每页多少条数据	</td>
                <td>number</td>
                <td>--</td>
                <td>10</td>
            </tr>
            <tr>
                <td>total	</td>
                <td>总数目	</td>
                <td>number</td>
                <td>--</td>
                <td>--</td>
            </tr>
            <tr>
                <td>pagerCount	</td>
                <td>显示的分页数量	</td>
                <td>number</td>
                <td>大于等于 5 且小于等于 21 的奇数</td>
                <td>7</td>
            </tr>
            <tr>
                <td>currentPage	</td>
                <td>初始化第几页	</td>
                <td>number</td>
                <td>--</td>
                <td>1</td>
            </tr>
            <tr>
                <td>layout	</td>
                <td>组件布局，子组件名用逗号分隔	</td>
                <td>string</td>
                <td>'prev, next, jumper, total'</td>
                <td>'prev, next'</td>
            </tr>
            <tr>
                <td>disabled	</td>
                <td>是否禁用	</td>
                <td>boolean</td>
                <td>--</td>
                <td>false</td>
            </tr>
            <tr>
                <td>@pageChange	</td>
                <td>currentPage 改变时会触发		</td>
                <td>function(page)</td>
                <td>--</td>
                <td>--</td>
            </tr>
            </tbody>
        </table>
        <TyPagination :total="200" @pageChange="pageChange" layout="'total,prev,next,jumper" background></TyPagination>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data(){
            return{
            }
        },
        mounted:function () {
            //  this.test();

        },
        methods:{
            pageChange(n){
                console.log(n)
            }

        }
    }
</script>

<style scoped>

</style>