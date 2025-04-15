import { useState, useEffect } from 'react';
import {
  //
  Form,
  Input,
  Radio,
  Select,
  NumberPicker,
  //
  Message,
} from '@alifd/next';

import { encodeParamsAsStr } from '@/utils';

import {
  //
  formItemAttrProps,
  GoodsObject,
  DataGoodsCateList,
  DataCountryList,
  EmailEmptyTxt,
  getGoodsNameListByGoodsCate,
  generateOrder,
} from './config';
import {
  //
  formatAmountDisplay,
  formatTotalAmountDisplay,
  formatCountDisplay,
} from './helper';

import styles from './index.module.css';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

export function FormComp() {
  const [selectedGoodsCateIdx, setSelectedGoodsCateIdx] = useState(-1);
  const [selectedGoodsNameIdx, setSelectedGoodsNameIdx] = useState(-1);
  const [selectedCountry, setSelectedCountry] = useState(-1);
  const [goodsNameList, setGoodsNameList] = useState([]);
  const [goodsNameListFlag, setGoodsNameListFlag] = useState(true);
  const [goodsUnitPrice, setGoodsUnitPrice] = useState(-1);
  const [goodsStock, setGoodsStock] = useState(-1);
  const [goodsQuantity, setGoodsQuantity] = useState(-1);
  const [totalAmount, setTotalAmount] = useState(0);

  const onGoodsCateIdxChangeEvt = (val) => {
    const gCate = val;

    setSelectedGoodsCateIdx(gCate);

    // 有选中的商品名，说明是非第一次
    if (selectedGoodsNameIdx) {
      // 商品名列表暂时不展示
      setGoodsNameListFlag(false);
      // 清空商品名列表
      setGoodsNameList([]);
      // field.setValue('goodsName', undefined);
      // 清除缓存的商品名
      setSelectedGoodsNameIdx(-1);

      setTimeout(() => {
        // 恢复 商品名列表展示
        setGoodsNameListFlag(true);
        // 设置新的商品名列表
        setGoodsNameList(getGoodsNameListByGoodsCate(gCate));
      }, 0);
    } else {
      // 没有选中的商品名，说明是第一次
      setGoodsNameList(getGoodsNameListByGoodsCate(gCate));
    }
  };

  const onGoodsNameIdxChangeEvt = (val) => {
    const gName = val;

    setSelectedGoodsNameIdx(gName);
  };

  const onCountryIdxChangeEvt = (val) => {
    setSelectedCountry(val);
  };

  const onFormQuantityChangeEvt = () => {};

  const onSubmitEvt = (vals, errors) => {
    console.log('onSubmitEvt res: ', {
      vals,
      errors,
    });

    if (errors) {
      // alert email rule error
      if (
        Object.keys(errors || {}).length === 1 &&
        errors.formEmail?.errors?.[0] !== EmailEmptyTxt
      ) {
        console.log('email rule error');
        Message.show({
          type: 'error',
          align: 'cc cc',
          content: '邮箱格式有误，请检查！',
        });
      }
    } else {
      const str = encodeParamsAsStr({
        orderStr: generateOrder(),
        amountStr: `${totalAmount}`,
      });
      location.href = `/order?_=${str}`;
    }
  };

  useEffect(() => {
    if (goodsUnitPrice !== -1 && goodsQuantity !== -1) {
      setTotalAmount(goodsUnitPrice * goodsQuantity);
    } else {
      setTotalAmount(0);
    }
  }, [goodsUnitPrice, goodsQuantity]);

  useEffect(() => {
    if (
      selectedGoodsCateIdx === -1 ||
      selectedGoodsNameIdx === -1 ||
      selectedCountry === -1
    ) {
      console.log('[empty]');
      setGoodsUnitPrice(-1);
      setGoodsStock(-1);
      setGoodsQuantity(-1);
    } else {
      const goods =
        GoodsObject[DataGoodsCateList[selectedGoodsCateIdx].label][
          selectedGoodsNameIdx
        ];
      const unitPrice = goods[`price-${selectedCountry}`] || goods['price'];
      const { stock } = goods;

      setGoodsUnitPrice(unitPrice);
      setGoodsStock(stock);
      setGoodsQuantity(1);
    }
  }, [
    //
    selectedGoodsCateIdx,
    selectedGoodsNameIdx,
    selectedCountry,
  ]);

  return (
    <Form
      className={styles.formComp}
      fullWidth
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        // 24 - 7
        span: 17,
      }}
      size="medium"
    >
      <FormItem
        {...formItemAttrProps}
        label="商品分类"
        name="formGoodsCate"
      >
        <Select
          placeholder="请选择商品类型"
          onChange={onGoodsCateIdxChangeEvt}
          dataSource={DataGoodsCateList}
        />
      </FormItem>
      <FormItem
        {...formItemAttrProps}
        label="商品名称"
        name="formGoodsName"
      >
        {goodsNameListFlag ? (
          <Select
            placeholder="请选择商品"
            disabled={selectedGoodsCateIdx === -1}
            dataSource={goodsNameList}
            onChange={onGoodsNameIdxChangeEvt}
          />
        ) : null}
      </FormItem>
      <FormItem
        {...formItemAttrProps}
        label="选择国家"
        name="formCountry"
      >
        <Select
          placeholder="请选择国家"
          disabled={selectedGoodsNameIdx === -1}
          dataSource={DataCountryList}
          onChange={onCountryIdxChangeEvt}
        />
      </FormItem>
      <FormItem label="商品单价">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {formatAmountDisplay(goodsUnitPrice)}
        </div>
      </FormItem>
      <FormItem label="商品库存">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          }}
        >
          {formatCountDisplay(goodsStock)}
        </div>
      </FormItem>
      <FormItem
        {...formItemAttrProps}
        label="购买数量"
        disabled={goodsQuantity === -1}
        name="formQuantity"
      >
        <NumberPicker
          onChange={onFormQuantityChangeEvt}
          defaultValue={1}
          step={1}
          type="inline"
        />
      </FormItem>
      <FormItem
        {...formItemAttrProps}
        label="指定性别"
        name="formGender"
      >
        <RadioGroup defaultValue="random">
          <Radio value="random">随机</Radio>
          <Radio value="male">男</Radio>
          <Radio value="female">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem
        {...formItemAttrProps}
        requiredMessage={EmailEmptyTxt}
        label="邮箱"
        format="email"
        name="formEmail"
      >
        <Input placeholder="卡密接收邮箱地址" />
      </FormItem>
      <FormItem className={styles.formCompBottomItem}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div
              style={{
                fontSize: '12px',
              }}
            >
              总金额:{' '}
            </div>
            <div
              style={{
                fontSize: '16px',
              }}
            >
              {formatTotalAmountDisplay(totalAmount)}
            </div>
          </div>
          <Form.Submit
            validate
            type="primary"
            size="large"
            onClick={onSubmitEvt}
          >
            立即下单
          </Form.Submit>
        </div>
      </FormItem>
    </Form>
  );
}
