
type Item = {
    userId: number,
    id: number,
    body: string,
    title: string,
}

const InitialData = [{ userId: 0, id: 0, body: '', title: '' }]

// export const About = () => {
//     const [data, setData] = useState<Item[]>(InitialData);
//     useEffect(() => {
//         async function getGridData() {
//             const gridData = await getData('https://jsonplaceholder.typicode.com/posts/');
//             const top4Data = gridData?.slice(0, 4);
//             setData(top4Data);
//         }
//         getGridData();
//     }, [])
//     if (!data?.length) {
//         return null
//     }
//     console.log("the grid data are", data)
//     return (
//         <div className="outer">
//             <div className="container">
//                 <div className="item">1</div>
//                 <div className="item">2</div>
//                 <div className="item">3</div>
//                 <div className="item">4</div>
//             </div>
//         </div>
//     );
// }

import { Button } from '@mui/material';

export function About() {
    return (
        <Button variant="contained" color="primary">
            Click Me
        </Button>
    );
}


{/* <Accesibility>

</Accesibility>

Js naming.map useReducer, filter,
    react coding split

css PerformanceNavigationTiming; name - css -  : Grid, flex,  */}