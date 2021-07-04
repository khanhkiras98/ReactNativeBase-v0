import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView, RefreshControl,
  View,
  Text,
  TouchableOpacity, Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styles from './index.style';
import Header from '../../components/Header';
import IconMedlink from '../../components/IconMedlink';
import HeaderTitle from '../../components/HeaderTitle';

import dashboardRequest from '../../api/homeRevenue';

//------------------------------------------------------------
import axios from "axios";
import config from "../../configs"


const App = () => {

  const navigation = useNavigation();
  //------------------------------------------------------
  // const [todayRevenue, setTodayRevenue] = useState(0)          // doanh thu hom nay
  // const [thisMonthRevenue, setThisMonthRevenue] = useState(0)  // doanh thu thang nay
  // const [lastMonthRevenue, setLastMonthRevenue] = useState(0)  // doanh thu thang truoc
  // const [todayInvoice, setTodayInvoice] = useState(0)
  // const [todayExport, setTodayExport] = useState(0)          // hoa don hom nay
  // const [totalImport, setTodayImport] = useState(0)            // nhap kho hom nay
  // const [etd, setEtd] = useState(0)                            // da het han
  // const [ate, setAte] = useState(0)                            // sap het han
  // const [osp, setOsp] = useState(0)                            // sap het trong kho

  // type totalDashboard  = {
  //   today_total_revenue: any| undefined
  //   this_month_revenue: any | undefined
  //   last_month_revenue: number
  //   today_total_invoice: number
  //   today_total_import: number
  //   today_total_export: number
  //   expire_time_products: number
  //   total_drug_about_to_expire: number
  //   out_of_stock_product: number
  // }

  // const totalDashboard = dashboardRequest()
  // const a = totalDashboard.today_total_revenue
  // setTodayRevenue(totalDashboard.today_total_revenue)
  // setThisMonthRevenue(totalDashboard.this_month_revenue)
  // setLastMonthRevenue(totalDashboard.last_month_revenue)
  // setTodayInvoice(totalDashboard.today_total_invoice)
  // setTodayImport(totalDashboard.today_total_import)
  // setTodayExport(totalDashboard.today_total_export)
  // setEtd(totalDashboard.expire_time_products)
  // setAte(totalDashboard.total_drug_about_to_expire)
  // setOsp(totalDashboard.out_of_stock_product)
  // const revenueAll = dashboardRequest()
  // console.log(revenueAll)
  // dashboardRequest()
  //------------------------------------------------------------------------------------
  const token = useSelector((state) => state.auth.token)

  console.log('Home: ', token, '\n')
  //------------------------------------------------------------------------------------

  //------------------------------------------------------
  const [todayRevenue, setTodayRevenue] = useState(0)          // doanh thu hom nay
  const [thisMonthRevenue, setThisMonthRevenue] = useState(0)  // doanh thu thang nay
  const [lastMonthRevenue, setLastMonthRevenue] = useState(0)  // doanh thu thang truoc
  const [todayInvoice, setTodayInvoice] = useState(0)
  const [todayExport, setTodayExport] = useState(0)          // hoa don hom nay
  const [todayImport, setTodayImport] = useState(0)            // nhap kho hom nay
  const [etd, setEtd] = useState(0)                            // da het han
  const [ate, setAte] = useState(0)                            // sap het han
  const [osp, setOsp] = useState(0)                            // sap het trong kho


  const dashboardRequest1 = async () => {
    const body = {
    }
    const header = {
      headers: {
        'Authorization': token
      }
    }
    const baseURL = config.axiosConfig().baseURL
    try {
      const response = await axios.get(`${baseURL}/report/dashboard`, header)
      const totalDashboard = response.data
      setTodayRevenue(totalDashboard.today_total_revenue)
      setThisMonthRevenue(totalDashboard.this_month_revenue)
      setLastMonthRevenue(totalDashboard.last_month_revenue)
      setTodayInvoice(totalDashboard.today_total_invoice)
      setTodayImport(totalDashboard.today_total_import)
      setTodayExport(totalDashboard.today_total_export)
      setEtd(totalDashboard.expire_time_products)
      setAte(totalDashboard.total_drug_about_to_expire)
      setOsp(totalDashboard.out_of_stock_product)
      // console.log('Revenue:', todayRevenue)
      // console.log('import', todayExport)
      console.log('Data: ', response.data)
      console.log('total: ', response.data.today_total_revenue)
      // return {today_total_revenue, this_month_revenue, last_month_revenue, 
      //     today_total_invoice, today_total_import, today_total_export, 
      //     expire_time_products, total_drug_about_to_expire, out_of_stock_product}
      return totalDashboard

    } catch (error) {
      if (axios.isAxiosError(error)) {
        handleAxiosError(error);
      } else {
        handleUnexpectedError(error);
      }
    }
  }
  const handleAxiosError = (error: object) => {
    console.log(error)
  }
  const handleUnexpectedError = (error: object) => {
    console.log(error)
  }
  //---------------------------------------------------------
  // Prevent goBack------------------------------------------
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        e.preventDefault();
      }), []
  )
  //---------------------------------------------------------
  useEffect(() => {
    dashboardRequest1()
    return () => {
    }
  }, [])
  //---------------------------------------------------------
  const _renderHeader = () => {
    return (
      <Header
        elementLeft={_renderHeaderLeft()}
        elementCenter={_renderHeaderCenter()}
        elementRight={_renderHeaderRight()}
      />
    )
  }
  const _renderHeaderLeft = () => {
    return (
      <IconMedlink />
    )
  }
  const _renderHeaderCenter = () => {
    return (
      <HeaderTitle title='Khánh Medlink' />
    )
  }
  const _renderHeaderRight = () => {
    return (
      <TouchableOpacity>
        <Image style={styles.rightHeader}
          source={require('../../assets/icon/iconHeader/icon-notice.png')} />
      </TouchableOpacity>
    )
  }
  const _renderButtonBill = () => {
    
    return (
      <View style={styles.billButtonContainer}>
        <TouchableOpacity style={styles.billButton}
          onPress={() => navigation.navigate('HomeBillStackScreen')} >
          <Image style={styles.billButtonIcon}
            source={require('../../assets/icon/iconHome/icon-bill-create.png')} />
          <Text style={styles.billButtonText}>Tạo đơn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.billButton}
          onPress={() => navigation.navigate('HomeBill')} >
          <Image style={styles.billButtonIcon}
            source={require('../../assets/icon/iconHome/icon-bill.png')} />
          <Text style={styles.billButtonText}>Hoá đơn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.billButton}
          onPress={() => navigation.navigate('HomeRepository')} >
          <Image style={styles.billButtonIcon}
            source={require('../../assets/icon/iconHome/icon-storage.png')} />
          <Text style={styles.billButtonText}>Kho</Text>
        </TouchableOpacity>
      </View>
    )
  }
  // const [todayRevenue, setTodayRevenue] = useState(0)          // doanh thu hom nay
  // const [thisMonthRevenue, setThisMonthRevenue] = useState(0)  // doanh thu thang nay
  // const [lastMonthRevenue, setLastMonthRevenue] = useState(0)  // doanh thu thang truoc
  // const [todayInvoice, setTodayInvoice] = useState(0)
  // const [todayExport, setTodayExport] = useState(0)          // hoa don hom nay
  // const [totalImport, setTodayImport] = useState(0)            // nhap kho hom nay
  // const [etd, setEtd] = useState(0)                            // da het han
  // const [ate, setAte] = useState(0)                            // sap het han
  // const [osp, setOsp] = useState(0)                            // sap het trong kho
  const _renderRevenue = () => {
    return (
      <View style={styles.todayInfoContainer}>
        <Text style={styles.todayText}>DOANH SỐ</Text>
        <View style={styles.infoContainer}>
          <Text>{`Hôm nay: `}</Text>
          <Text>{`${todayRevenue} đ`}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{`Tháng này`}:</Text>
          <Text>{`${thisMonthRevenue} đ`}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{`Tháng trước:`}</Text>
          <Text>{`${lastMonthRevenue} đ`}</Text>
        </View>
      </View>
    )
  }
  const _renderTodayReport = () => {
    return (
      <View style={styles.todayInfoContainer}>
        <Text style={styles.todayText}>BÁO CÁO TRONG NGÀY:</Text>
        <View style={styles.infoContainer}>
          <Text>{`Hoá đơn: `}</Text>
          <Text>{`${todayInvoice} (đơn)`}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{`Nhập kho`}:</Text>
          <Text>{`${todayImport} (phiếu)`}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{`Xuất kho:`}</Text>
          <Text>{`${todayExport} (phiếu)`}</Text>
        </View>
      </View>
    )
  }
  const _renderStatistic = () => {
    return (
      <View style={styles.statisticContainer}>
        <Text>Thống kê</Text>
      </View>
    )
  }
  const _renderWaring = () => (
    <View>
      <View style={styles.todayInfoContainer}>
        <Text style={styles.todayText}>CẢNH BÁO HẾT HẠN:</Text>
        <View style={styles.infoContainer}>
          <Text>{`Đã hết hạn `}</Text>
          <Text>{`${etd} (sp)`}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{`Sắp hết hạn`}:</Text>
          <Text>{`${ate} (sp)`}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text>{`Sắp hết trong kho:`}</Text>
          <Text>{`${osp} (sp)`}</Text>
        </View>
      </View>
    </View>
  )

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(500).then(() => setRefreshing(false));
  }, []);


  return (
    <SafeAreaView>
      {_renderHeader()}
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        {_renderButtonBill()}
        {_renderRevenue()}
        {_renderTodayReport()}
        {_renderStatistic()}
        {_renderWaring()}
      </ScrollView>
    </SafeAreaView>

  );
};


export default App;
