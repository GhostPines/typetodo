import '../../App.css'
import Card from './Card'

function Todo(props: any) {
    return (
        <div className="list-container">
            <div>
                <h2>ν΄μΌν μΌπ₯</h2>
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
                <h2>μλ£!π</h2>
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
