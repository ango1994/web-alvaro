import "./QueHago.css";
import image from "../public/fotos ango/coche-9.jpg";

export function QueHago() {
    return (
        <article>
            <img src={image} alt="" />
            <video width="320" height="240" controls autoPlay>
                <source
                    src="public\fotos ango\video web.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="head">
                <h2 className="subtitle">QUE HAGO?</h2>
                <p className="index">1.0</p>
            </div>

            <h3>Lorem Ipsum Dolor Amet</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                eum animi est voluptatem omnis alias aliquid adipisci amet earum
                ratione, mollitia officia ex fugit totam, odio id temporibus
                doloribus. Doloremque? Nostrum laboriosam eligendi ducimus
                reprehenderit officia ratione saepe eos debitis illum, dicta
                nemo non libero voluptatibus assumenda reiciendis veritatis quam
                ut ipsum dolore qui minus. Deserunt suscipit vero modi incidunt.
            </p>
        </article>
    );
}
