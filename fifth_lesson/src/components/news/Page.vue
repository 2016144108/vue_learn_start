<template>
    <div class="pager" v-if="total>0">
        <a href="" class="page_item" :class="{
        disabled: page===1}" @click.prevent="changepage(1)">首页</a>
        <a href="" class="page_item" :class="{
        disabled: page===1}" @click.prevent="changepage(page-1)">上一页</a>
        <a href="" v-for="(item, i) in pagelist" :key="i" class="page_item page_list" :class="{
        actived: item===page}" @click.prevent="changepage(item)">{{item}}</a>
        <a href="" class="page_item" :class="{
        disabled: page===pageNumber}" @click.prevent="changepage(page+1)">下一页</a>
        <a href="" class="page_item" :class="{
        disabled: page===pageNumber}" @click.prevent="changepage(pageNumber)">尾页</a>
        <span class="pager_text">
            <i>第{{page}}页</i>/<i>共{{pageNumber}}页</i>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Page",
        props: {
            page: {//当前页码
                default: 1,
                type: Number,
            },
            total: {//数据总数
                default: 0,
                type: Number,
            },
            limit: {//页总量
                default: 10,
                type: Number,
            },
            paneNumber: {//最多多少页
                default :10,
                type: Number,
            },
        },
        computed: {
            pageNumber(){
                return Math.ceil(this.total/this.limit);
            },
            minpage(){
                let n = this.page-this.paneNumber/2;
                if( n < 1 ){
                    n = 1;
                };
                return n;
            },
            maxpage(){
                let n = this.minpage + this.paneNumber - 1;
                if(n > this.pageNumber){
                    n = this.pageNumber;
                }
                return n;
            },
            pagelist(){
                let list=[];
                let i = 0;
                for(i = this.minpage; i <= this.maxpage; i++){
                    list.push(i);
                };
                return list;
            },
        },
        methods: {
            changepage(newpage){
                if(newpage>0&&newpage<=this.pageNumber){
                    this.$emit("pagechange",newpage);
                    console.log(newpage,this.pagelist);
                }
            }
        }
    }
</script>

<style scoped>
    .page_item{
        display: inline-block;
        padding: 5px;
        height: 14px;
        border: 1px solid grey;
        margin-right: 5px;
        color: grey;
        font-size: 14px;
        line-height: 14px;
        text-decoration: none;
        text-align: center;
    }
    .page_list{
        width: 14px;
        height: 14px;
    }
    .page_list:hover{
        color: #42b983;
        border: 1px solid white;
    }
    .actived{
        color: #42b983;
        border: 1px solid white;
    }
    .disabled{
        color: rgba(127, 123, 128, 0.3);
        border: 1px solid rgba(127, 123, 128, 0.3);
        cursor: no-drop;
    }

</style>
