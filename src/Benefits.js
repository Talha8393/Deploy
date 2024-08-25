import board from "./images/kanban1.png"
export default function Benefits() {
    return (
        <>
            <div id="benefits">
                <p className="B-heading1">Hassle free results</p>
                <p className="B-heading2">This is how is works,step by step.</p>

                <div className="card-container">
                    <div className="card">
                        <h1>1</h1>
                        <h2>Discovery Call</h2>
                        <p>We immerse ourselves in your project scenario, obstacles, and desired results to determine if we're a good fit.</p>
                    </div>
                    <div className="card">
                        <h1>2</h1>
                        <h2>First results</h2>
                        <p>Within two days of creating your first task, you get initial results. That entails a roadmap for your project's success.</p>
                    </div>
                    <div className="card">
                        <h1>3</h1>
                        <h2>Finalized project</h2>
                        <p>After completing all the tasks, your project is ready for success. You will receive all the necessary design resources.</p>
                    </div>
                </div>

                <img className="img-board" src={board} alt="board" />
                <div className="btn2-container">
                    <button className="btn-work" >
                        <i className="fa-solid fa-circle-play"></i>
                        How it Works
                    </button>
                </div>
            </div>
        </>

    );
}