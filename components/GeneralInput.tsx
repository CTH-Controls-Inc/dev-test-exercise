type Props = {
    text: string
    placeholder: string
    value: string,
    propFunction: (e: any) => void,
    error?: boolean
};

const GeneralInput = ({text, placeholder, value, propFunction, error}: Props) => {

    return (
        <div>
            <input 
                className={`text-[#000] my-2 w-full border-4 ${!error ? 'border-[#243c5a]' : 'border-[red]'}`}
                type={text} 
                placeholder={placeholder} 
                value={value}
                onInput={propFunction}
                required={false}
            />
        </div>
    )
}

export default GeneralInput