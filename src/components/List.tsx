import '../../App.css'
import Card from './Card'

function Todo(props: any) {
    return (
        <div className="list-container">
            <div>
                <h2>해야할일🔥</h2>
                <div className="list-wrapper">
                    {props.todoWork.map((todo: any) => {
                        return (
                            <Card
                                todo={todo}
                                key={todo.id}
                                handleDelete={props.handleDelete}
                                onChangeHandler={props.onChangeHandler}
                            />
                        )
                    })}
                </div>
            </div>
            <div>
                <h2>완료!🎉</h2>
                <div className="list-wrapper">
                    {props.todoDone.map((todo: any) => {
                        return (
                            <Card
                                todo={todo}
                                key={todo.id}
                                handleDelete={props.handleDelete}
                                onChangeHandler={props.onChangeHandler}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todo
