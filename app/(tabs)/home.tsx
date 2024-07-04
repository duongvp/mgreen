import { DashBoard } from '@/components/home/DashBoard';
import { HomeUi } from '@/components/home/HomeUi';
import { UserRole } from '@/constant/user';
import { ProfileService } from '@/service/profile';
import useInforUserStore from '@/store/useStoreUser';
import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';


export default function HomeScreen() {
  const { role } = useInforUserStore();

  return (
    <ScrollView>
      {
        role !== UserRole.CollectorStaff ? <HomeUi /> : <DashBoard />
      }
    </ScrollView>
  )
}


