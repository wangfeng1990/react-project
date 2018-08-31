import React from 'react'

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    // 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。
    componentWillMount(){
        console.log('will mount');
    }
    // 组件渲染之后调用，只调用一次。
    componentDidMount(){
        console.log('did mount');
    }
    // 组件初始化时不调用，组件接受新的props时调用。
    componentWillReceiveProps(newProps){
        console.log('will props  ' + newProps.name)
    }
    // 如果返回false后面的生命周期方法将不会执行
    // react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候
    shouldComponentUpdate(){
        console.log('should update')
        return true;
    }
    // 组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state
    componentWillUpdate(){
        console.log('will update')
    }
    // 组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
    componentDidUpdate(){
        console.log('did update')
    }
    render(){
        return <div>
            <p>这里是子组件</p>
            <p>{this.props.name}</p>
        </div>
    }
}