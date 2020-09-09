anagrams = require './index'

test 'anagrams function exists',  ->
  expect(typeof anagrams).toEqual('function')

test "'hello' is an anagram of 'llohe'", ->
  expect(anagrams('hello', 'llohe')).toBeTruthy()

test "'One One' is not an anagram of 'One One c'", ->
  expect(anagrams('One One', 'One One c')).toBeFalsy()
