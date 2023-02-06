import { useState } from "react"
import { useEffectUpdate } from "./useEffectUpdate"

export const useForm = (initialState, cb) => {
    const [fields, setFields] = useState(initialState)

    useEffectUpdate(() => {
        cb?.(fields)
    }, [fields])

    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;
            case 'checkbox':
                value = target.checked
                break
            default:
                break;
        }
        setFields(prevFields => ({ ...prevFields, [field]: value }))
    }





    return [fields, setFields, handleChange]

}