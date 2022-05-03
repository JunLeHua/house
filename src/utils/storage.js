// 存
export const setItem = (name, value) => {
  // 复合数据
  if (typeof value === 'object') {
    window.localStorage.setItem(name, JSON.stringify(value))
  } else {
    // 基本数据类型
    window.localStorage.setItem(name, value)
  }
}

// 取
export const getItem = (name) => {
  const value = JSON.parse(window.localStorage.getItem(name))
  // 假设取出来的数组或者对象 进行编译 如果是基础数据捕获错误直接返回基础数据类型
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

// 根据名字删除
export const removeItem = (name) => {
  localStorage.removeItem(name)
}

// 删除全部
export const clearAllItem = () => {
  localStorage.clearItem()
}
