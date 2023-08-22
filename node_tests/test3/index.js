const { fork } = require("child_process");

class MessageQueue {
  constructor() {
    this.topics = {}
  }

  createTopic(topicName) {
    if (typeof topicName !== 'string')  throw new Error('Topic name should be a string')
    if(!this.topics[topicName]) {
      this.topics[topicName] = []
      console.log(`Topic Created: ${topicName}`)
    } else {
      throw new Error('Topic name already exists')
    }
    return;
  }

  destroyAllTopics() {
    this.topics = {}
  }

  sendMessage(topicName, message) {
    if (this.topics[topicName]) {
      this.topics[topicName].push(message)
      console.log(`Message Added: ${message} to Topic: ${topicName}`)
    }
  }

  getMessage(topicName) {
    const topic = this.topic[topicName]
    if (topic && topic.length) {
      return topic.shift()
    }
    return null
  }

  getSize() {
    const topic = this.topic[topicName]
    return topic ? topic.length : 0;
  }
}

module.exports = MessageQueue;