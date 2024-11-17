
import android from "../assets/android.svg";
import kotlin from "../assets/kotlin.svg";
import aws from "../assets/aws.svg";
import java from "../assets/java.svg";
import react from "../assets/react.svg";

const Technologies = () => {
    const width = 100
    const height = 100
    return (
        <div className="pb-4">

            <h2 className="my-20 text-center text-4xl">
                Technologies
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <img src={android} className="text-7xl" width={width} height={height}></img>
                </div>

                <div>
                    <img src={java} className="7xl" width={width} height={height}></img>
                </div>

                <div>
                    <img src={kotlin} className="mx7xl" width={width} height={height}></img>
                </div>

                <div>
                    <img src={aws} className="7xl" width={width} height={height}></img>
                </div>

                <div>
                    <img src={react} className="7xl" width={width} height={height}></img>
                </div>

            </div>

        </div>

    )
}

export default Technologies