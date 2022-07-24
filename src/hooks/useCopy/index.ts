import { ElMessage } from 'element-plus'

export const myCopy = (text: string) => {
  navigator.clipboard.writeText(text).then(function () {
    /* clipboard successfully set */
    ElMessage.success('复制成功')
  }, err => {
    /* clipboard write failed */
    ElMessage.error('复制失败')
  });
}
