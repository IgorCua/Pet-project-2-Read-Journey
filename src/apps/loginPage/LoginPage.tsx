import { useState } from "react";

export const LoginPage = () => {
    // export type TargetGroup = {
    //     id: number;
    //     name: string;
    //     targets: Target[];
    //     children?: TargetGroup[];
    // }
    const obj = {
        key1: '1',
        key2: '2',
        key3: '3',
        key4: '4',
        key5: '5',
        child: {
            key1: '1',
            key2: '2',
            key3: '3',
            key4: '4',
            key5: '5',
            child: {
                key1: '1',
                key2: '2',
                key3: '3',
                key4: '4',
                key5: '5',
            }
        }
    }
    
    const checkIfHasChild = (parent: any) => {
        if(parent){
            if (parent.contains(parent.child)){
                console.log(parent.contains(parent.child))
                return true;
            } else {
                return false;
            }
        }
    }
 
    type ChildListProps = {
        isChild: boolean,
        setIsChild: any,
        child?: any
    }

    type ParentListProps = {
        isChild: boolean,
        setIsChild: any,
        child?: any
    }

    const ChildList = ({isChild, setIsChild, child}: ChildListProps) => {
        return <ul>
            {child && child.map((key: any) => {
                if(key !== 'child') {
                    return <li>
                        <p>{key}</p>
                    </li>
                } else {
                    return <li>
                        <p>{key}</p>
                    </li>
                }
            })}
        </ul>
    }
    // export type TargetGroup = {
    //     id: number;
    //     name: string;
    //     targets: Target[];
    //     children?: TargetGroup[];
    // }
    const ParentList = ({isChild, setIsChild, child}: ParentListProps) => {
        const keys = Object.keys(child);
        const hasChild = child.child ? child.child : null;
        
        if(!obj.child) setIsChild(false);

        return (
            <ul>
                {child.map((key: any) => {
                    if(key !== 'child') {
                        return <li>
                            <p>{key}</p>
                        </li>
                    } else {
                        return <li>
                            <ChildList isChild={isChild} setIsChild={setIsChild} child={child}/>
                        </li>
                    }
                })}
            </ul>
        )
    }

    const Acordion: React.FC = () => {
        const [isChild, setIsChild] = useState<boolean>(false);
        const keys = Object.keys(obj);
        const child = obj.child ? obj.child : null;
        
        if(obj.child) setIsChild(true);
        
        return (
            <ul>
                {keys.map((key: any) => {
                    if(key !== 'child') {
                        return <li>
                            <p>{key}</p>
                        </li>
                    } else {
                        return <li>
                            <ParentList isChild={isChild} setIsChild={setIsChild} child={child}/>
                        </li>
                    }
                })}
                {/* <ParentList isChild={isChild} setIsChild={setIsChild} keys={keys}/> */}
            </ul>
        )
    }
    
    return (
        <div>
            <p>login Page</p>
            <Acordion/>
        </div>
    )
}