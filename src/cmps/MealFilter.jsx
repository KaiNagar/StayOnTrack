import { Component } from 'react'

export class MealFilter extends Component {
  state = {
    filterBy: {
      text: '',
      cal: 0,
      protein: 0,
      carbs: 0,
      fats: 0,
    },
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
      this.props.onChangeFilter({ ...this.state })
    })
  }

  render() {
    const { txt, cal, protein, carbs, fats } = this.state
    return (
      <section className='meal-filter'>
        <form>
          <label htmlFor='text'>Free text: </label>
          <input
            onChange={this.handleChange}
            value={txt}
            name='text'
            id='text'
            type='text'
            placeholder='By text'
          />
        </form>
      </section>
    )
  }
}
