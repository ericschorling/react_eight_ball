import React from 'react'
import Button from '@material-ui/core/Button'

class EightBall extends React.Component{
    state={
        input: '',
        answer: ''
    }
    getAnswer =async()=>{
        const response = await fetch(`https://8ball.delegator.com/magic/JSON/${this.state.input}"`)
        const answer = await response.json()
        return answer
    }
    _handleChange (questions){
        this.setState({
            input: questions
        })
    }
    _handleClick =async(e)=> {
        e.preventDefault()
        const theAnswer = await this.getAnswer()
        this.setState({
            input:'',
            answer: theAnswer.magic.answer
        })
    }

    render() {
        return (
            <div>
                <h1>Magic Eight Ball</h1>
                <form>
                    <input type="text" value={this.state.input} onChange={event=> this._handleChange(event.target.value)}/>
                    <Button variant="contained" onClick={this._handleClick}>Ask</Button>
                    <p>{this.state.answer}</p>
                </form>
                
            </div>
        )
    }
}

export default EightBall