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
          <div class="file-zone-icon"></div>
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
  </div>
</template>

<script setup lang="ts">
import * as XLSX from 'xlsx';

const fileInputRef = ref<HTMLInputElement>();
const fileZoneRef = ref<HTMLDivElement>();

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
      reader.readAsBinaryString(file);
      reader.onload = (e) => {
        const data = e.target?.result;
        // 读取文件内容
        const workbook = XLSX.read(data, { type: 'binary' });
        // 获取第一个sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        // 转换为json
        const json = XLSX.utils.sheet_to_json(worksheet);
        console.log(json);
      };
      reader.onerror = (e) => {
        console.log(e);
      };
    }
  });
};
</script>

<style lang="scss" scoped>
.file-zone {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
    justify-content: center;
    align-items: center;
    .file-zone-icon {
      width: 40px;
      height: 40px;
      background-image: url('../../assets/images/file-icon.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      &:hover {
        background-image: url('../../assets/images/file-icon-hover.svg');
      }
    }
    .file-zone-text {
      .file-zone-title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .file-zone-title-text {
          font-size: 14px;
          font-weight: 500;
          color: var(--el-text-color-secondary);
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
