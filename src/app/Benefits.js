import Image from "next/image";
import board from "./images/kanban1.png"
export default function Benefits() {
    return (
        <>
            <div id="benefits">
                <p className="B-heading1">Membership Benefits</p>
                <p className="B-heading2">Perks so good you'll never need to go anywhere else for your design. Seriously.</p>

                <div className="card-container">
                    <div className="card">
                        <h1>1</h1>
                        <h2>Design board</h2>
                        <p>We immerse ourselves in your project scenario, obstacles, and desired results to determine if we're a good fit.</p>
                    </div>
                    <div className="card">
                        <h1>2</h1>
                        <h2>Lightning fast delivery</h2>
                        <p>Within two days of creating your first task, you get initial results. That entails a roadmap for your project's success.</p>
                    </div>
                    <div className="card">
                        <h1>3</h1>
                        <h2>Fixed monthly rate</h2>
                        <p>After completing all the tasks, your project is ready for success. You will receive all the necessary design resources.</p>
                    </div>
                    <div className="card">
                        <h1>4</h1>
                        <h2>Top-notch quality</h2>
                        <p>We immerse ourselves in your project scenario, obstacles, and desired results to determine if we're a good fit.</p>
                    </div>
                    <div className="card">
                        <h1>5</h1>
                        <h2>Flexible and scalable</h2>
                        <p>Within two days of creating your first task, you get initial results. That entails a roadmap for your project's success.</p>
                    </div>
                    <div className="card">
                        <h1>6</h1>
                        <h2>Unique and all yours</h2>
                        <p>After completing all the tasks, your project is ready for success. You will receive all the necessary design resources.</p>
                    </div>
                </div>

                <Image className="img-board" src={board} alt="board" />
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