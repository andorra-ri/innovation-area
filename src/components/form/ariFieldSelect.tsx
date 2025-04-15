
import { ReactElement, FunctionComponent, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select, Typography,  } from "antd";

const { Text, Paragraph } = Typography
type Props = {
  name: string
  items: itemsType[]
  label?: string
  placeHolder?: string
  description?: string
  children?: ReactNode
  alertMessage?: boolean
  mandatory?: boolean
  multiple?: boolean
  onChange?: (value?: any) => void;
};

//TODO: Migrar a archivo de tipos
type itemsType = {
  label: string,
  value: string,
}

export const ARIFieldSelect: FunctionComponent<Props> = ({
  name,
  label,
  description,
  items,
  placeHolder,
  alertMessage,
  mandatory,
  multiple,
  ...props
}): ReactElement => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <div style={{marginTop: '2%'}}>
            <Text><strong>{`${label}`}{mandatory && (<Text> * </Text>)}</strong></Text>
            {description && (<Paragraph style={{color:'grey'}}> {`${description}`} </Paragraph>)}
            <div>
              <Select
                //labelInValue
                mode={multiple ? 'multiple' : undefined}
                filterOption={false}
                variant="filled"
                style={{ width: '100%' }}
                placeholder={placeHolder && placeHolder}
                value={value}
                onChange={value => {
                  value && 
                    onChange(value)
                    props.onChange && props.onChange(value)
                }}
                options={items}
              />
            </div>
          </div>
        )}
      />
    </>
  );
};
