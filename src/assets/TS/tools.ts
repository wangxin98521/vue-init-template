/*
 * @Author: 苏年璟
 * @Date: 2020-08-24 09:38:37
 * @LastEditTime: 2020-08-24 15:34:06
 */
/**
 * @name: 本地存储section
 * @param {sectionName: 存储名, sectionData: 存储数据}
 * @return {}
 * @Date: 2020-08-24 10:45:26
 */
export function setLocalStorage(sectionName: string, sectionData: any) {
  const _sectionData: string = JSON.stringify(sectionData);
  localStorage.setItem(sectionName, _sectionData);
}

/**
 * @name: 获取本地存储的section
 * @param {sectionName: 存储名}
 * @return {存储数据}
 * @Date: 2020-08-24 11:21:10
 * @LastEditTime: Do not Edit
 */
export function getLocalStorage(sectionName: string) {
  return JSON.parse(localStorage.getItem(sectionName));
}
