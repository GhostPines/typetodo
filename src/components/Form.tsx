import '../App.css'

function Form(props: any) {
    console.log(props)
    return (
        <div className="formwr">
            <div className="input-group">
                제목
                <input
                    className="add-input"
                    value={props.title}
                    onChange={(e) => props.setTitle(e.target.value)}
                ></input>
                내용
                <input
                    className="add-input"
                    value={props.body}
                    onChange={(e) => props.setBody(e.target.value)}
                ></input>
            </div>
            <button className="add-button" onClick={props.onSubmitHandler}>
                추가하기
            </button>
        </div>
    )
}

export default Form
