
import { ReactElement, FunctionComponent } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox, Col, Row, Typography } from "antd";

const { Text, Paragraph } = Typography
type Props = {
  name: string
  items?: itemsType[]
  label?: string
  description?: string
  mandatory?: boolean
  onChange?: (value?: any) => void;
};

//TODO: Migrar a archivo de tipos
type itemsType = {
  label: string,
  value: string,
}

export const ARIFieldCheckBox: FunctionComponent<Props> = ({
  name,
  label,
  description,
  items,
  mandatory,
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
              <Checkbox.Group 
                style={{ width: '100%' }}
                value={value}
                onChange={value => {
                  value && 
                    onChange( value)
                    props.onChange && props.onChange(value)
                }}
                >
                <Row>
                  {items?.map((v: itemsType) => (
                    <Col span={12}>
                      <Checkbox value={v.value}>{v.label}</Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            </div>
          </div>
        )}
      />
    </>
  );
};
