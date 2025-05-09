import React,{useEffect,useState} from "react";
import { DateTimeInput } from "sanity";
import { useFormValue } from "sanity";
import { useClient } from "sanity";
import { ObjectInputProps } from "sanity";

type Props = ObjectInputProps<string[]>

export default function StartDateInput(props:Props) {
    const {renderDefault,value} = props
    const categoryRef = useFormValue(['category']) as {_ref?:string} | null
    const client = useClient()
    const [showField,setShowField] = useState(false)

    function getLocalizedValue(arr: { _key: string; value: string }[] | undefined, locale: string): string | undefined {
        if (!Array.isArray(arr)) return undefined
        return arr.find(item => item._key === locale)?.value
    }

    useEffect(()=>{
        async function fetchCategory(){
            if (categoryRef?._ref){
                try{
                    const result = await client.fetch<{name?: { _key: string; value: string }[]}>(
                        `*[_id == $id ][0]{name}`,
                        {id:categoryRef._ref}
                    )
                    const localizedCategory = getLocalizedValue(result?.name,'en')
                    setShowField(localizedCategory === "Camps")

                }catch(error){
                    console.error("error fetching category",error)
                    setShowField(false)
                }
            }
        }
        fetchCategory()
    },[categoryRef,client])
    if (!showField){
        return null
    }
    return renderDefault(props)
}