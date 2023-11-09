import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { Page, Text, View, Document, StyleSheet, Image, PDFViewer } from '@react-pdf/renderer';
import { BiFullscreen } from 'react-icons/bi';

const ViewBook = () => {
  const { id } = useParams();
  const axios = useAxios();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['read-book'],
    queryFn: async () => {
      return await axios.get(`/all-book/${id}`);
    },
  });

  const {
    name,
    author_name,
    description,
    image,
    category_name,
  } = data?.data || {};

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    image: {
      width: 200,
      height: 300,
      margin: 'auto',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      fontWeight: 'medium',
      textAlign: 'center',
    },
    content: {
      fontSize: 14,
      textAlign: 'left',
    },
  });

  const MyDocument = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{category_name}</Text>
          <Image src={image} style={styles.image} />
          <Text style={styles.title}>Book Name: {name}</Text>
          <Text style={styles.subtitle}>Author Name: {author_name}</Text>
          <Text style={styles.content}>{description}</Text>
          <Text style={styles.content}>In the early days of computing, enormous machines filled entire rooms. These machines, known as mainframes, were the size of refrigerators and required teams of technicians to operate. They were marvels of engineering, processing data at speeds that were previously unimaginable.</Text>
          <Text style={styles.content}>The birth of the personal computer in the 1970s changed everything. Suddenly, individuals could have computing power at their fingertips. The iconic Apple II, released in 1977, brought computing into homes and schools, sparking a revolution in the way people work and play.</Text>
          <Text style={styles.content}>The 1990s ushered in the era of the World Wide Web, connecting people across the globe and opening up new possibilities for communication and commerce. The dot-com boom of the late 1990s and the subsequent bust marked a period of incredible growth and innovation.</Text>
          <Text style={styles.content}>Today, we carry the power of those early mainframes in our pockets, thanks to the smartphones that have become an integral part of our lives. The history of computing is a story of constant evolution, innovation, and the profound impact of technology on society.</Text>
         
          
        </View>
      </Page>
    </Document>
  );

  return (
    
    <PDFViewer width={BiFullscreen} height={1000}>
      {MyDocument}
    </PDFViewer>
  );
};

export default ViewBook;
