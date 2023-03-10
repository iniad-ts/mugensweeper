import type { UserData } from 'service/findUsers'
import { findUsers } from 'service/findUsers'
import { expect, test } from 'vitest'

test('default', () => {
  expect(true).toBeTruthy()
})

test('サンプルAPIの関数テスト', () => {
  //前提条件
  const userList: UserData[] = [
    { id: 0, firstName: '太郎', lastName: '山田' },
    { id: 1, firstName: '花子', lastName: '佐藤' },
    { id: 2, firstName: '大揮', lastName: '鈴木' },
    { id: 3, firstName: '雄太', lastName: '山田' },
    { id: 4, firstName: '宏', lastName: '山田' },
    { id: 5, firstName: '裕子', lastName: '佐藤' },
  ]
  //実行
  const result = findUsers(userList, { limit: 3 })
  const result2 = findUsers(userList, { limit: 2 })
  const result3 = findUsers(userList, { limit: 3 })

  //検証
  //expect(result).toHaveLength(1)
  console.log(userList.slice(1))
  console.log(expect(result).toEqual(expect.arrayContaining(userList.slice(0, 3))))

  expect(result2).toHaveLength(2)
  expect(result2).toEqual(expect.arrayContaining(userList.slice(0, 2)))

  expect(result3).toHaveLength(3)
  expect(result3).toEqual(expect.arrayContaining(userList.slice(0, 3)))
})
