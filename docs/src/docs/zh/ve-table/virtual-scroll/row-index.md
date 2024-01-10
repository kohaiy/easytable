:::anchor 行序号问题

开启虚拟滚动后，行号可以通过服务端返回。如果表格存在客户端查询的情况，需要需要我们做一些处理。具体见下面示例

:::demo 1、滚动时会触发`scrolling({ startRowIndex, visibleStartIndex, visibleEndIndex, visibleAboveCount, visibleBelowCount})`。`startRowIndex`为当前开始渲染的行号，`visibleStartIndex`为当前可见区域的开始行号，`visibleEndIndex`为当前可见区域的结束行号，`visibleAboveCount`为当前可见区域上方渲染的数量，`visibleBelowCount`为当前可见区域下方渲染的数量<br>2、通过`scrolling`方法结合`renderBodyCell({ row, column, rowIndex })`方法返回的`rowIndex` 算出当前虚拟滚动的真实序号，为`rowIndex + startRowIndex + 1`

```html
<template>
    <div>
        <el-input style="width:250px" v-model="searchValue" placeholder="search name"></el-input>
        <el-button type="primary" @click="search">Search</el-button>
        <br />
        <br />
        <ve-table
            :max-height="500"
            :virtual-scroll-option="virtualScrollOption"
            :columns="columns"
            :table-data="tableData"
            row-key-field-name="rowKey"
        />
    </div>
</template>

<script>
    import Mock from "mockjs";
    export default {
        data() {
            return {
                // search value
                searchValue: "",
                // start row index
                startRowIndex: 0,
                virtualScrollOption: {
                    // 是否开启
                    enable: true,
                    scrolling: this.scrolling,
                },
                // columns
                columns: [
                    {
                        field: "index",
                        key: "index",
                        title: "#",
                        width: 200,
                        align: "left",
                        renderBodyCell: this.renderRowIndex,
                    },
                    {
                        field: "name",
                        key: "name",
                        title: "Name",
                        width: 200,
                        align: "left",
                    },
                    {
                        field: "hobby",
                        key: "hobby",
                        title: "Hobby",
                        width: 300,
                        align: "left",
                    },
                    {
                        field: "address",
                        key: "address",
                        title: "Address",
                        width: "",
                        align: "left",
                    },
                ],
                // real table data
                tableData: [],
                // source data
                sourceData: [],
            };
        },
        methods: {
            // virtual scrolling
            scrolling({
                startRowIndex,
                visibleStartIndex,
                visibleEndIndex,
                visibleAboveCount,
                visibleBelowCount,
            }) {
                this.startRowIndex = startRowIndex;
                console.log("startRowIndex::", startRowIndex);
                console.log("visibleStartIndex::", visibleStartIndex);
                console.log("visibleEndIndex::", visibleEndIndex);
                console.log("visibleAboveCount::", visibleAboveCount);
                console.log("visibleBelowCount::", visibleBelowCount);
            },
            // render row index
            renderRowIndex({ row, column, rowIndex }) {
                return (
                    <span class="text-bold" style="color:#1890ff;">
                        {rowIndex + this.startRowIndex + 1}
                    </span>
                );
            },

            // search
            search() {
                const searchValue = this.searchValue;
                this.tableData = this.sourceData.filter(
                    (x) =>
                        !searchValue.length ||
                        x.name.toLowerCase().includes(searchValue.toLowerCase()),
                );
            },

            initData() {
                let data = [];
                for (let i = 0; i < 1000; i++) {
                    data.push({
                        rowKey: i,
                        name: Mock.Random.name(),
                        hobby: `hobby`,
                        address: `address`,
                    });
                }

                this.sourceData = data;
                this.tableData = this.sourceData.slice(0);
            },
        },
        created() {
            this.initData();
        },
    };
</script>
```

:::
