import  Queue  from "bull";
import * as jobs from "../../jobs";
const queues = Object.values(jobs).map(job=>({
    bull:new Queue(job.key,{redis: { port: 6379, host: '127.0.0.1', password: '' }}),
    name:job.key,
    handle:job.handle,
    options:job.options
}));

export default {
    queues,
    add(name,data) {
        const queue = this.queues.find(queue=>queue.name === name);
        return queue.bull.add(data,queue.options)
    },
    process() {
        return this.queues.forEach(queue=>{
            queue.bull.process(queue.handle);
            queue.bull.on("failed",(job,err)=>{
                console.log(`job ${job.key} error: ${err}`)
            })
        })
    }
}
