import * as React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Linking, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {  } from "@react-navigation/native";

function HomeScreen() {
  return (
    <ScrollView>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        margin: 10
      }}>
        <Image source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipOVE1jLK-i035jgsQrXEJVdF6JJ28zf_mEUsTa2=w160-h160-k-no' }} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          marginRight: 10
        }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Anarkh İnterirors</Text>
          <Text style={{ fontSize: 16, color: '#777' }}>Mimarlıkta Hayallere Atılan İmza</Text>
        </View>
      </View>


      <View style={{
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
      }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>İnstagram Sayfamız</Text>
        <Text style={{ fontSize: 15, }}>Anarkhİnteirors'a ait olan tasarımları incelemek için instagram sayfamıza gidebilirsiniz</Text>
        <TouchableOpacity style={{ backgroundColor: '#DEB887', borderRadius: 4, marginTop: 8, padding: 8 }} onPress={uri='https://www.instagram.com/anarkhinteriors/?hl=bn'}>
        
          <Text style={{ color: '#fff', textAlign: 'center' }}>Daha Fazla</Text>
        </TouchableOpacity>
      </View>

      <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 18,
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

      }}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/30/fe/2a/30fe2ac46730eb4cac45e898999e4afb.jpg' }}
          style={{ width: '100%', height: 250, borderRadius: 8, marginBottom: 8 }}
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Ofisimiz</Text>
        <Text>Ofisimiz Kükürtlü Mahallesinde bulunmaktadır.</Text>
      </View>


    </ScrollView>
  )
}

function GaleriScreen() {
  return (
    <ScrollView>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#DEB887',
        borderRadius: 15,
        padding: 22,
        margin: 22
      }}>
        <Image source={{ uri: 'https://lh5.googleusercontent.com/p/AF1QipOVE1jLK-i035jgsQrXEJVdF6JJ28zf_mEUsTa2=w160-h160-k-no' }} style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          marginRight: 12
        }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Anarkh İnterirors</Text>
          <Text style={{ fontSize: 20, color: '#777' }}>Ünlü Firmalara Yaptığımız Tasarımlar</Text>
        </View>
      </View>
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 18,
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

      }}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/bb/c7/2a/bbc72afa8660080d2a962dfa3cf9066a.jpg' }}
          style={{ width: '100%', height: 250, borderRadius: 8, marginBottom: 8 }}
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Café Tortoni</Text>
        <Text>Buenos Aires</Text>
      </View>
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 18,
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

      }}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/29/2a/7e/292a7ec334ea9496a0de637fe9db3ed0.jpg' }}
          style={{ width: '100%', height: 250, borderRadius: 8, marginBottom: 8 }}
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>ATLAS KASAP </Text>
        <Text>İSTANBUL </Text>
      </View>


      <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 18,
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

      }}>
        <Image
          source={{ uri: 'https://file1.digimekan.com/1umvpmv9zu00oc8cw4.jpg' }}
          style={{ width: '100%', height: 250, borderRadius: 8, marginBottom: 8 }}
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Ülkü Pastanesi</Text>
        <Text>BURSA</Text>
      </View>


      <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 18,
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

      }}>
        <Image
          source={{ uri: 'https://mekanlar.com/img/img191/7dabc0673436ae54cc2b48f272f771c8536c3c96_plc_fa1a8e747fc4c393817399736d4fd7ee.jpg' }}
          style={{ width: '100%', height: 250, borderRadius: 8, marginBottom: 8 }}
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Nevale Pasta & Fırın</Text>
        <Text>Bursa</Text>
      </View>


      <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 18,
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

      }}>
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/bb/c7/2a/bbc72afa8660080d2a962dfa3cf9066a.jpg' }}
          style={{ width: '100%', height: 250, borderRadius: 8, marginBottom: 8 }}
        />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Café Tortoni</Text>
        <Text>Buenos Aires</Text>
      </View>



    </ScrollView>
  );
}
function HizmetlerScreen() {
  return (
    <ScrollView>
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 18,
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

      }}>
        <Image
          source={{ uri: 'data:image/jpeg;base64,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' }}
          style={{ width: '100%', height: 150, borderRadius: 8, marginBottom: 8 }}
        />
        <Text style={{ fontSize: 55, fontWeight: 'bold' }}>Kasap</Text>
        <Text>Kasaplar Bizi Tercih Eder</Text>
        <TouchableOpacity style={{ backgroundColor: '#DEB887', borderRadius: 4, marginTop: 8, padding: 8 }}>
          <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '500' }}>Bir çok yaptığımız kasap projesi ile insanlar kasap tasarımlarını bize yaptırmakta</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 18,
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

      }}>
        <Image
          source={{ uri: 'https://www.coutureicmimarlik.com/uploads/5161e075a49a741d4ee4b588a4ecca01.jpg' }}
          style={{ width: '100%', height: 150, borderRadius: 8, marginBottom: 8 }}
        />
        <Text style={{ fontSize: 55, fontWeight: 'bold' }}>Cami</Text>
        <Text>Cami Tasarımında 1 Numara</Text>
        <TouchableOpacity style={{ backgroundColor: '#DEB887', borderRadius: 4, marginTop: 8, padding: 8 }}>
          <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '500' }}>Rusya'ya Yaptığımız Cami tasarımı çok büyük olan bir projedir Cami iç Tasarımında Marka yapmış bir firmayız</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 18,
        margin: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,

      }}>
        <Image
          source={{ uri: 'data:image/jpeg;base64,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' }}
          style={{ width: '100%', height: 150, borderRadius: 8, marginBottom: 8 }}
        />
        <Text style={{ fontSize: 55, fontWeight: 'bold' }}>Pastane</Text>
        <Text>Pastaneler Anarkh interiors'tan başkasına yaptırmaz</Text>
        <TouchableOpacity style={{ backgroundColor: '#DEB887', borderRadius: 4, marginTop: 8, padding: 8 }}>
          <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '500' }}>En Çok profosyonelleştiğimiz Konu Pastanedir. En iyi yaptığımız tasarımlar Pastane içeriğindedir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

function SettingsScreen() {
  return (
    <ScrollView>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 15,
        margin: 15
      }}>
        <Image source={{ uri: 'https://media.istockphoto.com/id/1173137781/tr/vekt%C3%B6r/%C3%A7a%C4%9Fr%C4%B1-simgesi-vekt%C3%B6r%C3%BC-g%C3%BCr%C3%BClt%C3%BCl%C3%BC-telefon-d%C3%BCz-arama-sembol%C3%BC-beyaz-arka-plan-%C3%BCzerinde-izole.jpg?s=612x612&w=0&k=20&c=j2ajhCiggT05bJF4qxiboPVFtPlzZKDEwLo5iw8g3-U=' }} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          marginRight: 10
        }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Telefon</Text>
          <Text style={{ fontSize: 16, color: '#777' }}>+90 555 655 54 45</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 15,
        margin: 15
      }}>
        <Image source={{ uri: 'https://w7.pngwing.com/pngs/333/868/png-transparent-mail-computer-icons-email-graphy-e-mail-miscellaneous-angle-rectangle.png' }} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          marginRight: 10
        }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>E - Posta</Text>
          <Text style={{ fontSize: 16, color: '#777' }}>info@anarkhinteriors</Text>
        </View>
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 15,
        margin: 15
      }}>
        <Image source={{ uri: 'https://w7.pngwing.com/pngs/549/715/png-transparent-web-development-logo-website-web-design-symmetry-internet-thumbnail.png' }} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          marginRight: 10
        }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Web Sitesi</Text>
          <Text style={{ fontSize: 16, color: '#777' }}>www.anarkhinteriors.com</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 15,
        margin: 15
      }}>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/005/196/599/small/gps-map-navigation-direction-solid-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg' }} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          marginRight: 10
        }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Adres</Text>
          <Text style={{ fontSize: 16, color: '#777' }}>Osmangazi/Bursa Kükürtlü Mahallesi</Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 15,
        margin: 15
      }}>
        <Image source={{ uri: 'https://w7.pngwing.com/pngs/366/932/png-transparent-camera-instagram-social-media-instagram-logo-social-media-solid-icon.png' }} style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          marginRight: 10
        }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>İnstagram</Text>
          <Text style={{ fontSize: 16, color: '#777' }}>@anarkhinteriors</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Anasayfa"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ size = 5 }) => (
              <Ionicons name='home' color='#DEB887' size={size} />
            )
          }}
        />

        <Tab.Screen
          name="Galeri"
          component={GaleriScreen}
          options={{
            tabBarLabel: 'Galeri',
            tabBarIcon: ({ size = 5 }) => (
              <MaterialIcons name="photo-library" size={24} color="#DEB887" />
            )
          }}
        />

        <Tab.Screen
          name="Hizmetler"
          component={HizmetlerScreen}
          options={{
            tabBarLabel: 'Hizmetler',
            tabBarIcon: ({ size = 5 }) => (
              <MaterialIcons name="design-services" size={24} color="#DEB887" />
            )
          }}
        />

        <Tab.Screen
          name="İlerişim"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'İletişim',
            tabBarIcon: ({ size = 5 }) => (
              <Ionicons name="information-circle" size={24} color="#DEB887" />
            )
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}


