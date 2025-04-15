
import { ReactElement, FunctionComponent, ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Switch, Typography, message } from "antd";
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'


const { Text, Paragraph } = Typography
type Props = {
  name: string
  label?: string
  description?: string
  mandatory?: boolean
  onChange?: (value?: any) => void;
};

export const ARIFieldSwitch: FunctionComponent<Props> = ({
  name,
  label,
  description,
  mandatory,
  ...props
}): ReactElement => {
  const { control } = useFormContext();
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Text><strong>{`${label}`}{mandatory && (<Text> * </Text>)}</strong></Text>
              {description && (<Paragraph style={{ color: 'grey' }}>{`${description}`}</Paragraph>)}
            </div>
            <div>
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
                size="small"
                onChange={value => {
                  if (value) onChange(value);
                  if (props.onChange) props.onChange(value);
                }}
              />
            </div>
          </div>
        )}
      />
      {contextHolder}
    </>
  );
};
