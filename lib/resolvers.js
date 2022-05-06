'use strict'

const courses = [
  {
    _id: '1',
  title: 'Mi título',
  teacher: 'Mi profe',
  description: 'GraphQL',
  topic: 'GraphQL'
  },
  {
    _id: '2',
  title: 'Mi título 2',
  teacher: 'Mi profe',
  description: 'GraphQL',
  topic: 'GraphQL'
  },
  {
    _id: '3',
  title: 'Mi título 3',
  teacher: 'Mi profe',
  description: 'GraphQL',
  topic: 'GraphQL'
  },
]

module.exports = {
  getCourses: () => {
    return courses
  }
}