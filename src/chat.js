import {ApiAiClient} from 'api-ai-javascript';
import {createStore, applyMiddleware} from 'redux'

const accessToken = '8680fecca7e84128b1606a0f7fa76242';
const client = new ApiAiClient({accessToken});

//Default Message Type
const ON_MEESAGE = 'ON_MESSAGE'

//Default State
const initState = [{
    text:'May I help you',
    sender:'bot'
}]

//Send Message
export const sendMessage = (text, sender='user') => ({
    type:ON_MEESAGE,
    payload : {text, sender}
})

//Message Middleaware
const messageMiddleware = ()=> next => action => {
    next(action);
    if(action.type === ON_MEESAGE) {
        const { text } = action.payload;

        client.textRequest(text)
        .then( onSuccess )

        function onSuccess (resp) {
            const {result: {fulfillment}} = resp
            next(sendMessage(fulfillment.speech, 'bot'))
        }
    }
}

//Action Reducer
const messageReducer = (state=initState, action) => {
    switch(action.type) {

        case ON_MEESAGE:
            return [...state, action.payload]

        default:
        return state;
    }
}

export const store = createStore(messageReducer, applyMiddleware(messageMiddleware))