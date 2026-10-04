export interface CountryLocation {
  name: string;
  code: string;
  states: {
    name: string;
    cities: string[];
  }[];
}

export const LOCATION_DATA: CountryLocation[] = [
  {
    name: 'India',
    code: 'IN',
    states: [
      {
        name: 'Maharashtra',
        cities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad', 'Solapur', 'Kolhapur', 'Navi Mumbai', 'Amravati'],
      },
      {
        name: 'Delhi (NCT)',
        cities: ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Dwarka', 'Rohini', 'Connaught Place'],
      },
      {
        name: 'Karnataka',
        cities: ['Bengaluru', 'Mysuru', 'Hubballi', 'Mangaluru', 'Belagavi', 'Kalaburagi', 'Davanagere', 'Ballari'],
      },
      {
        name: 'Rajasthan',
        cities: ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Sikar', 'Bharatpur'],
      },
      {
        name: 'Uttar Pradesh',
        cities: ['Lucknow', 'Kanpur', 'Noida', 'Greater Noida', 'Ghaziabad', 'Agra', 'Varanasi', 'Prayagraj', 'Meerut', 'Bareilly'],
      },
      {
        name: 'Tamil Nadu',
        cities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Erode', 'Vellore'],
      },
      {
        name: 'Gujarat',
        cities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh'],
      },
      {
        name: 'Telangana',
        cities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Khammam', 'Ramagundam', 'Secunderabad'],
      },
      {
        name: 'West Bengal',
        cities: ['Kolkata', 'Howrah', 'Siliguri', 'Durgapur', 'Asansol', 'Bardhaman', 'Kharagpur'],
      },
      {
        name: 'Madhya Pradesh',
        cities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Dewas', 'Satna'],
      },
      {
        name: 'Haryana',
        cities: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal'],
      },
      {
        name: 'Punjab',
        cities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur'],
      },
      {
        name: 'Kerala',
        cities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kollam', 'Alappuzha', 'Palakkad'],
      },
      {
        name: 'Andhra Pradesh',
        cities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati'],
      },
      {
        name: 'Bihar',
        cities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif'],
      },
      {
        name: 'Odisha',
        cities: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Balasore'],
      },
      {
        name: 'Assam',
        cities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia'],
      },
      {
        name: 'Jharkhand',
        cities: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh'],
      },
      {
        name: 'Chhattisgarh',
        cities: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon'],
      },
      {
        name: 'Uttarakhand',
        cities: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rishikesh', 'Nainital'],
      },
      {
        name: 'Himachal Pradesh',
        cities: ['Shimla', 'Dharamshala', 'Mandi', 'Solan', 'Kullu', 'Manali'],
      },
      {
        name: 'Goa',
        cities: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda'],
      },
      {
        name: 'Jammu and Kashmir',
        cities: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Udhampur'],
      },
      {
        name: 'Chandigarh (UT)',
        cities: ['Chandigarh Central', 'Sector 17', 'Industrial Area'],
      },
    ],
  },
  {
    name: 'United States',
    code: 'US',
    states: [
      { name: 'California', cities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose', 'Sacramento', 'Oakland'] },
      { name: 'New York', cities: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany'] },
      { name: 'Texas', cities: ['Houston', 'Austin', 'Dallas', 'San Antonio', 'Fort Worth', 'El Paso'] },
      { name: 'Florida', cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Fort Lauderdale', 'Tallahassee'] },
      { name: 'Illinois', cities: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield'] },
      { name: 'Washington', cities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Everett'] },
      { name: 'Massachusetts', cities: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell'] },
      { name: 'Georgia', cities: ['Atlanta', 'Augusta', 'Columbus', 'Savannah', 'Athens'] },
    ],
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    states: [
      { name: 'England (Greater London)', cities: ['London City', 'Westminster', 'Camden', 'Greenwich', 'Kensington'] },
      { name: 'England (North West)', cities: ['Manchester', 'Liverpool', 'Preston', 'Bolton', 'Salford'] },
      { name: 'England (West Midlands)', cities: ['Birmingham', 'Coventry', 'Wolverhampton', 'Solihull'] },
      { name: 'England (Yorkshire)', cities: ['Leeds', 'Sheffield', 'Bradford', 'York', 'Hull'] },
      { name: 'Scotland', cities: ['Edinburgh', 'Glasgow', 'Aberdeen', 'Dundee', 'Inverness'] },
      { name: 'Wales', cities: ['Cardiff', 'Swansea', 'Newport', 'Bangor'] },
    ],
  },
  {
    name: 'United Arab Emirates',
    code: 'AE',
    states: [
      { name: 'Dubai', cities: ['Downtown Dubai', 'Dubai Marina', 'Business Bay', 'JLT', 'Deira', 'Palm Jumeirah'] },
      { name: 'Abu Dhabi', cities: ['Abu Dhabi City', 'Al Ain', 'Al Dhafra', 'Yas Island', 'Saadiyat Island'] },
      { name: 'Sharjah', cities: ['Sharjah City', 'Khor Fakkan', 'Kalba', 'Al Dhaid'] },
      { name: 'Ajman', cities: ['Ajman City', 'Al Manama', 'Masfout'] },
    ],
  },
  {
    name: 'Canada',
    code: 'CA',
    states: [
      { name: 'Ontario', cities: ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'Brampton', 'Markham'] },
      { name: 'British Columbia', cities: ['Vancouver', 'Victoria', 'Surrey', 'Burnaby', 'Richmond', 'Kelowna'] },
      { name: 'Quebec', cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil'] },
      { name: 'Alberta', cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge'] },
    ],
  },
  {
    name: 'Australia',
    code: 'AU',
    states: [
      { name: 'New South Wales', cities: ['Sydney', 'Newcastle', 'Central Coast', 'Wollongong'] },
      { name: 'Victoria', cities: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo'] },
      { name: 'Queensland', cities: ['Brisbane', 'Gold Coast', 'Sunshine Coast', 'Cairns', 'Townsville'] },
      { name: 'Western Australia', cities: ['Perth', 'Fremantle', 'Bunbury', 'Mandurah'] },
    ],
  },
  {
    name: 'Germany',
    code: 'DE',
    states: [
      { name: 'Bavaria', cities: ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg', 'Würzburg'] },
      { name: 'Berlin', cities: ['Berlin City', 'Mitte', 'Charlottenburg', 'Kreuzberg'] },
      { name: 'North Rhine-Westphalia', cities: ['Cologne', 'Düsseldorf', 'Dortmund', 'Essen', 'Bonn'] },
      { name: 'Hesse', cities: ['Frankfurt', 'Wiesbaden', 'Kassel', 'Darmstadt'] },
    ],
  },
  {
    name: 'Singapore',
    code: 'SG',
    states: [
      { name: 'Singapore Central', cities: ['Downtown Core', 'Marina Bay', 'Orchard', 'Bugis'] },
      { name: 'Singapore East & West', cities: ['Jurong', 'Tampines', 'Changi', 'Woodlands'] },
    ],
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    states: [
      { name: 'Riyadh Province', cities: ['Riyadh', 'Al Kharj', 'Ad Diriyah'] },
      { name: 'Makkah Province', cities: ['Jeddah', 'Mecca', 'Taif'] },
      { name: 'Eastern Province', cities: ['Dammam', 'Khobar', 'Jubail'] },
    ],
  },
  {
    name: 'Other Worldwide',
    code: 'GLOBAL',
    states: [
      { name: 'International / Remote', cities: ['Metropolitan Capital', 'Regional Center', 'Other District'] },
    ],
  },
];
