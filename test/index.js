/* eslint-env mocha */
'use strict'
// 十进制。
const decimal = 10

const cityhash = require('../')
const assert = require('power-assert')

describe('cityhash', function () {
  /**
   * 值从 https://hash.onlinetoolsland.com/cityhash-online/zh-cn/ 获取。
   */
  it('hash32', function () {
    assert(cityhash.hash32('test32') === '1772217699'.toString(decimal))
    assert(cityhash.hash32(Buffer.from('test32')) === '1772217699'.toString(decimal))
  })

  it('more Test', function () {
    var text = 'test'
    assert(cityhash.hash32(text) === (1633095781).toString(decimal))
    assert(cityhash.hash64(text) === (8581389452482819506).toString(decimal))
  })
})
