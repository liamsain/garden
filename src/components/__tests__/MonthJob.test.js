// MyComponent.test.js
import { render } from '@testing-library/vue'
import MonthJob from '../MonthJob.vue'
test('it should work', () => {
  const { getByText } = render(MonthJob, {
    props: {
      img: 'adsf',
      vegetables: [],
      title: 'testing'
    }
  })

  // assert output
  getByText('testing')
})