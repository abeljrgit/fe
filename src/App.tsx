import { Fragment } from "react";
import { BlackPinkCard } from "@components";
import { BlackPinkData } from "@content";

function App() {
  return (
    <Fragment>
      <div className="min-h-screen w-full flex items-center justify-center flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row">
        {BlackPinkData.map((data) => {
          return (
            <BlackPinkCard
              image={data.image}
              stageName={data.stageName}
              birthName={data.birthName}
              position={data.position}
              birthday={data.birthday}
              birthplace={data.birthplace}
              socialMedia={data.socialMedia}
            />
          );
        })}
      </div>
    </Fragment>
  );
}

export default App;
