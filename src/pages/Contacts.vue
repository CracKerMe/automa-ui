<template>
  <div class="flex flex-col gap-4xl">
    <h1 class="text-center">contacts</h1>
    <div class="flex justify-center items-center">
      <div ref="fileZoneRef" class="file-zone p-12" @click="handleClickFn">
        <input
          ref="fileInputRef"
          type="file"
          class="file-input"
          accept=".csv,.xls,.xlsx"
          @change="handleChangeFn"
        />
        <div class="file-zone-holder">
          <div class="file-zone-icon" />
          <div class="file-zone-text">
            <div class="file-zone-title">
              <div class="file-zone-title-text shadow-2xl">
                Drag and drop your files here or
              </div>
              <div class="file-zone-title-button">
                <el-button type="primary" size="small"> Browse </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 表格展示 当前文件的数据 -->
    <div class="flex justify-center items-center" v-show="tableData.length > 0">
      <el-table
        :data="tableData"
        style="width: 100%; height: 60vh"
        bordered
        stripe
        size="large"
      >
        <el-table-column
          v-for="header in tableHeaders"
          :key="header"
          :label="header"
          :prop="header"
          :show-overflow-tooltip="true"
          :fixed="header === 'name' ? 'left' : false"
          :sortable="true"
          :align="header === 'name' ? 'left' : 'center'"
          :header-align="header === 'name' ? 'left' : 'center'"
          :class-name="header === 'name' ? 'text-bold' : ''"
        />
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as XLSX from 'xlsx';
import { ref, computed } from 'vue';

const fileInputRef = ref<HTMLInputElement>();
const fileZoneRef = ref<HTMLDivElement>();

const tableData = ref<any[]>([]); // 用于存储表格数据

// 计算所有对象的键的并集作为表头
const tableHeaders = computed(() => {
  if (!tableData.value || tableData.value.length === 0) return [];

  // 获取所有对象键的并集
  const headers = new Set<string>();
  tableData.value.forEach((item) => {
    Object.keys(item).forEach((key) => {
      headers.add(key);
    });
  });

  return Array.from(headers);
});

const handleClickFn = () => {
  fileInputRef.value?.click();
};
const handleChangeFn = (e: Event) => {
  const files = Array.from((e.target as HTMLInputElement).files ?? []);
  files.forEach((file) => {
    // 只接收处理 csv xls xlsx 文件
    if (
      file &&
      (file.type === 'text/csv' ||
        file.type === 'application/vnd.ms-excel' ||
        file.type ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    ) {
      // 读取文件
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      tableData.value = []; // 清空之前的数据
      reader.onload = (e) => {
        const data = e.target?.result;
        // 读取文件内容
        const workbook = XLSX.read(data, { type: 'buffer', codepage: 65001 });
        // 在选项中添加 `codepage: 65001`，其中 65001 是 UTF-8 的代码页值。
        // 此外，对于 CSV 文件，您还可以考虑以下几点：
        // 1. 如果您知道 CSV 文件可能使用其他编码（如 GBK、GB18030 等常见于中文环境的编码），可以更改代码页值。例如，GBK 的代码页是 936。
        // 2. 如果您需要处理多种编码的文件，可以考虑使用 chardet 或类似的库先检测文件编码，然后再使用相应的代码页值。
        // 3. 对于 Excel 文件（.xls, .xlsx），您通常不需要担心编码问题，因为这些格式内部已经处理了字符编码。
        // 获取第一个sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        // 转换为json
        const json = XLSX.utils.sheet_to_json(worksheet);
        console.log(json);
        tableData.value = json; // 将读取到的数据存储到 tableData 中
      };
      reader.onerror = (e) => {
        console.log(e);
        tableData.value = []; // 清空之前的数据
      };
    }
  });
};
</script>

<style lang="scss" scoped>
.file-zone {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  border: 1px dashed var(--el-border-color);
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    border-color: var(--el-color-primary);
  }

  .file-input {
    display: none;

    &:hover {
      border-color: var(--el-color-primary);
    }

    &:focus {
      border-color: var(--el-color-primary);
    }

    &:focus-visible {
      border-color: var(--el-color-primary);
      outline: none;
    }
  }

  .file-zone-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .file-zone-icon {
      width: 40px;
      height: 40px;
      background-image: url('../../assets/images/file-icon.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;

      &:hover {
        background-image: url('../../assets/images/file-icon-hover.svg');
      }
    }

    .file-zone-text {
      .file-zone-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .file-zone-title-text {
          margin-bottom: 20px;
          color: var(--el-text-color-secondary);
          font-size: 14px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
