/**
 * Bản dịch tiếng Việt cho câu 571–640 của ngân hàng gốc.
 * q = câu hỏi, o = đáp án (đúng thứ tự gốc), s = các dòng con, e = các khối giải thích.
 */
export default {
  571: {
    q: [
      'Công ty bạn đang muốn xây dựng một hệ thống xác thực.',
      'Giải pháp: Bạn khuyến nghị dùng Conditional Access.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  572: {
    q: ['Ở dạng đơn giản nhất, chính sách Conditional Access chính là các câu lệnh “nếu — thì”.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  574: {
    q: ['Bạn dùng gì để nhận diện các máy ảo Azure dùng chưa hết công suất hoặc không dùng tới?'],
    o: ['Azure Advisor', 'Azure Cost Management + Billing', 'Azure reservations', 'Azure Policy'],
    e: [
      [
        'Advisor giúp bạn tối ưu và giảm tổng chi tiêu Azure bằng cách nhận diện',
        'tài nguyên đang rảnh rỗi hoặc dùng chưa hết công suất. Bạn xem được khuyến nghị về chi phí ở',
        'tab Cost trên bảng điều khiển của Advisor.',
      ],
    ],
  },

  575: {
    q: [
      'Bạn có một subscription Azure với 100 máy ảo Azure. Bạn cần nhanh chóng nhận diện',
      'những máy ảo dùng chưa hết công suất để hạ xuống bậc dịch vụ rẻ hơn. Bạn nên dùng',
      'mục nào?',
    ],
    o: ['Metrics', 'Customer insights', 'Azure Monitor', 'Azure Advisor'],
  },

  576: {
    q: ['Ai dùng được Azure Total Cost of Ownership (TCO) calculator?'],
    o: [
      'Chỉ billing reader của một subscription Azure',
      'Chỉ owner của một subscription Azure',
      'Bất kỳ ai',
      'Chỉ những người dùng có tài khoản Azure Active Directory (Azure AD) gắn với một subscription Azure',
    ],
    e: [['Bạn không cần có subscription Azure mới dùng được TCO Calculator.']],
  },

  577: {
    q: [
      'Bạn có một máy ảo Azure tên VM1. Bạn dự định mã hoá VM1 bằng Azure Disk',
      'Encryption. Bạn phải tạo tài nguyên Azure nào trước tiên?',
    ],
    o: [
      'Một Azure Storage account',
      'Một chính sách Azure Information Protection',
      'Một Encryption Key',
      'Một Azure Key Vault',
    ],
  },

  578: {
    q: [
      'Bạn cần được thông báo khi Microsoft dự định bảo trì theo kế hoạch có thể ảnh hưởng tới tài nguyên',
      'triển khai trong một subscription Azure. Bạn nên dùng gì?',
    ],
    o: ['Azure Monitor', 'Azure Service Health', 'Azure Advisor', 'Microsoft Trust Center'],
    e: [
      [
        'Azure Service Health cho bạn cái nhìn cá nhân hoá về tình trạng của các dịch vụ',
        'và region Azure mà bạn đang dùng.',
        'Đây là nơi tốt nhất để tìm các thông báo ảnh hưởng dịch vụ về sự cố,',
        'hoạt động bảo trì theo kế hoạch và các khuyến cáo khác về tình trạng.',
      ],
    ],
  },

  580: {
    q: [
      'Công ty bạn có thoả thuận Software Assurance bao gồm license Microsoft SQL Server.',
      'Bạn dự định triển khai SQL Server trên máy ảo Azure. Bạn nên làm gì để giảm thiểu chi phí license',
      'cho việc triển khai đó?',
    ],
    o: [
      'Deallocate các máy ảo ngoài giờ làm việc.',
      'Dùng Azure Hybrid Benefit.',
      'Cấu hình ngân sách trong Azure Cost Management.',
      'Dùng Azure reservations.',
    ],
    e: [
      [
        'Azure Hybrid Benefit là ưu đãi về license giúp bạn giảm đáng kể',
        'chi phí vận hành khối lượng công việc trên đám mây. Nó cho phép bạn dùng',
        'license Windows Server và SQL Server có Software Assurance sẵn có tại chỗ',
        'lên Azure.',
      ],
    ],
  },

  581: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Từ Azure Monitor, bạn xem được ai đã tắt một máy ảo cụ thể trong vòng 14 ngày gần nhất.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'Azure Event Hubs', 'Azure Activity Log', 'Azure Service Health'],
    e: [
      [
        'Dùng Azure Activity Log để xem ai đã tắt một máy ảo cụ thể',
        'trong vòng 14 ngày gần nhất. Activity log được giữ trong 90 ngày.',
      ],
    ],
  },

  582: {
    q: ['Microsoft Service Trust Portal truy cập được bằng một tài khoản dịch vụ đám mây của Microsoft.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  583: {
    q: [
      'Compliance Manager dùng được để theo dõi các hoạt động tuân thủ quy định của công ty bạn liên quan tới',
      'dịch vụ đám mây của Microsoft.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  584: {
    q: [
      'Tính năng My Library dùng được để lưu tài liệu và tài nguyên của Microsoft Service Trust Portal',
      'vào một nơi duy nhất.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  585: {
    q: ['Một session host của Windows Virtual Desktop chỉ chạy được Windows 10.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  586: {
    q: [
      'Một host pool của Windows Virtual Desktop gồm 20 session host chỉ hỗ trợ tối đa 20',
      'kết nối người dùng đồng thời.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  587: {
    q: ['Windows Virtual Desktop hỗ trợ ảo hoá cả desktop lẫn ứng dụng.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  588: {
    q: [
      'Azure DevOps Services cho phép lập trình viên triển khai hoặc cập nhật ứng dụng lên Azure bằng pipeline',
      'continuous integration/continuous delivery (CI/CD).',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  589: {
    q: ['Azure DevOps Services có sẵn một kho Git để lập trình viên lưu mã nguồn.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  590: {
    q: ['Azure DevOps Services dùng được để xây dựng và chạy ứng dụng web.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  591: {
    q: [
      'Một công ty muốn có một giải pháp nhắn tin cấp doanh nghiệp tích hợp với ứng dụng sẵn có của họ',
      'đang chạy trên Microsoft Azure.',
      'Công ty nên dùng thứ nào sau đây cho yêu cầu này?',
    ],
    o: ['Logic Apps', 'API Management Services', 'Service Bus', 'Data Factories', 'API Connections'],
  },

  592: {
    q: ['Dịch vụ nào cho phép dùng năng lực tính toán Azure đang rảnh với mức chiết khấu rất sâu?'],
    o: [
      'Azure container instances',
      'Azure reserved machine',
      'Azure spot virtual machine instances',
      'Azure virtual machine scale sets',
    ],
  },

  593: {
    q: ['Azure Site Recovery cung cấp _________________ cho máy ảo.'],
    o: ['fault tolerance', 'disaster recovery', 'elasticity', 'high availability'],
  },

  594: {
    q: [
      'Azure Virtual Machines cho ít quyền kiểm soát môi trường tính toán hơn so với các dịch vụ compute',
      'khác.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  595: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Khi triển khai một giải pháp software as a service (SaaS), bạn chịu trách nhiệm cấu hình',
      'tính sẵn sàng cao.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì.',
      'định nghĩa quy tắc mở rộng',
      'cài đặt giải pháp SaaS',
      'cấu hình chính giải pháp SaaS đó',
    ],
  },

  597: {
    q: [
      'Bạn dự định dùng Azure để chạy hai ứng dụng tên App1 và App2. Hai ứng dụng phải đáp ứng các',
      'yêu cầu sau:',
      'Bạn phải sửa được mã của App1.',
      '•',
      'Công sức quản trị hệ điều hành của App1 phải ở mức tối thiểu.',
      '•',
      'App2 phải chạy tương tác trực tiếp với hệ điều hành của máy chủ.',
      '•',
      'Bạn nên dùng loại dịch vụ đám mây nào cho mỗi ứng dụng?',
      'Hãy chọn phương án phù hợp trong vùng đáp án. LƯU Ý: Mỗi lựa chọn đúng được một',
      'điểm.',
      'APP1',
      'APP2',
    ],
    o: [
      'Infrastructure as a Service (IaaS)',
      'Platform as a Service (PaaS)',
      'Software as a Service (SaaS)',
    ],
  },

  599: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Azure Policy cung cấp một nền tảng chung để triển khai đối tượng lên hạ tầng đám mây và để',
      'bảo đảm tính nhất quán trên toàn môi trường Azure.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: ['Không cần thay đổi gì', 'Resource groups', 'Azure Resource Manager', 'Management groups'],
  },

  600: {
    q: [
      'Câu hỏi này yêu cầu bạn đánh giá phần chữ được gạch chân xem có đúng không.',
      'Một Azure region chứa một hoặc nhiều data center nối với nhau bằng một mạng có độ trễ thấp.',
      'Hướng dẫn: Xem lại phần chữ được gạch chân. Nếu nó làm câu trên đúng, chọn “No change is needed”. Nếu',
      'câu trên sai, chọn phương án làm cho câu trở nên đúng.',
    ],
    o: [
      'Không cần thay đổi gì',
      'Có mặt ở mọi quốc gia nơi Microsoft có văn phòng chi nhánh',
      'Chỉ có mặt ở mọi quốc gia thuộc châu Âu và châu Mỹ',
      'Chứa một hoặc nhiều data center nối với nhau bằng một mạng có độ trễ cao',
    ],
  },

  601: {
    q: ['Hỗ trợ từ diễn đàn MSDN chỉ dành cho công ty có subscription pay-as-you-go.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Người dùng có bất kỳ loại subscription Azure nào (pay-as-you-go, Enterprise Agreement,',
        'Microsoft Customer Agreement…) đều nhận được hỗ trợ từ diễn đàn MSDN.',
      ],
    ],
  },

  604: {
    q: ['Bạn nên dùng dịch vụ Azure nào để xem secure score của mình?'],
    o: ['Microsoft Defender', 'Azure Arc', 'DDoS Protection', 'Azure Firewall'],
  },

  605: {
    q: ['Bạn quản lý một máy chủ Windows tại chỗ như một tài nguyên Azure bằng cách dùng:'],
    o: ['Azure AD Connect', 'Azure Pipelines agent', 'Azure VPN Gateway', 'Azure Arc'],
    e: [
      [
        'Azure Arc là dịch vụ cho phép bạn quản lý máy chủ tại chỗ và các',
        'tài nguyên khác như một phần của môi trường lai trên Azure. Với Azure Arc, bạn dùng được',
        'chính những công cụ, API và cổng quản trị mà bạn dùng cho tài nguyên Azure để',
        'quản lý cả tài nguyên tại chỗ.',
      ],
    ],
  },

  606: {
    q: [
      'Dịch vụ nào sau đây là dịch vụ bảo mật mạng trên đám mây, giúp bảo vệ các',
      'tài nguyên đặt trong một Azure Virtual Network?',
    ],
    o: ['Azure Sentinel', 'Azure Key Vault', 'Azure Dedicated Hosts', 'Azure Firewall'],
    e: [
      [
        'Azure Firewall là dịch vụ trên đám mây dùng để bảo vệ tài nguyên',
        'trong một Azure virtual network. Ở đó bạn định nghĩa được network rule và application',
        'rule để bảo vệ Azure Virtual Network của mình.',
      ],
    ],
  },

  607: {
    q: ['_________ chỉ khả năng tăng hoặc giảm tài nguyên cho một khối lượng công việc nhất định.'],
    o: ['Scalability', 'Elasticity', 'Agility', 'Resiliency'],
  },

  608: {
    q: ['Thứ nào sau đây được mô tả là việc hiện thực hoá logic thành những khối mã dựng sẵn?'],
    o: ['Azure Logic Apps', 'Azure App Service', 'Azure ARM Template', 'Azure Functions'],
  },

  609: {
    q: [
      'Một công ty dự định dựng một giải pháp trên nền tảng Azure. Giải pháp có yêu cầu',
      'then chốt sau:',
      'Cung cấp một dịch vụ có quản lý dùng để quản lý và mở rộng các ứng dụng chạy trên container.',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Event Grid', 'Azure DevOps', 'Azure Kubernetes', 'Azure Dev Test Labs'],
  },

  610: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Azure. Giải pháp có yêu cầu then',
      'chốt sau:',
      'Một công cụ đưa ra hướng dẫn và khuyến nghị để cải thiện môi trường Azure',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Advisor', 'Azure Cognitive Services', 'Azure Application Insights', 'Azure DevOps'],
  },

  611: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Azure. Họ có yêu cầu then chốt sau:',
      'Cho phép xử lý dữ liệu từ hàng triệu cảm biến.',
      '•',
      'Dịch vụ Azure nào dưới đây dùng được cho mục đích này?',
    ],
    o: ['Azure Machine Learning', 'Azure IoT Hub', 'Azure AI Bot', 'Azure Functions'],
    e: [
      [
        'IoT Hub là dịch vụ có quản lý, chạy trên đám mây, đóng vai trò trung tâm điều phối',
        'tin nhắn cho việc liên lạc hai chiều giữa ứng dụng IoT của bạn và các',
        'thiết bị mà nó quản lý. Bạn dùng Azure IoT Hub để dựng giải pháp IoT với liên lạc',
        'tin cậy và an toàn giữa hàng triệu thiết bị IoT và một backend',
        'chạy trên đám mây. Bạn kết nối được gần như mọi thiết bị vào IoT Hub.',
      ],
    ],
  },

  612: {
    q: [
      'Một công ty dự định dựng một giải pháp trên Azure. Giải pháp có yêu cầu then',
      'chốt sau:',
      'Một giải pháp tích hợp để triển khai mã nguồn',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Advisor', 'Azure Cognitive Services', 'Azure Application Insights', 'Azure DevOps'],
    e: [
      [
        'Azure DevOps gồm một bộ công cụ lớn. Trong đó có Azure',
        'Pipelines, dùng để build, kiểm thử và triển khai mã. Vì đây là tính năng rõ ràng',
        'của công cụ này nên mọi phương án khác đều sai.',
      ],
    ],
  },

  613: {
    q: [
      'Công ty bạn dự định chạy tài nguyên bằng các dịch vụ Azure. Bạn phải chọn đúng',
      'dịch vụ cho yêu cầu mong muốn. Bạn sẽ dùng thứ nào sau đây cho yêu cầu',
      'này?',
      'Cung cấp một dịch vụ dùng để tích hợp bot vào ứng dụng',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Cognitive Service', 'Azure DevOps', 'Azure Bot Service', 'Azure Synapse Analytics'],
    e: [['Bạn dùng Azure Bot Service để dựng bot bên trong ứng dụng.']],
  },

  614: {
    q: [
      'Công ty bạn dự định chạy tài nguyên bằng các dịch vụ Azure. Bạn phải chọn đúng',
      'dịch vụ cho yêu cầu mong muốn. Bạn sẽ dùng thứ nào sau đây cho yêu cầu',
      'này?',
      'Cung cấp một dịch vụ dùng để thêm tính năng trí tuệ nhân tạo vào ứng dụng',
      '•',
      'Lựa chọn nào phù hợp nhất với yêu cầu này?',
    ],
    o: ['Azure Cognitive Service', 'Azure DevOps', 'Azure Bot Service', 'Azure Synapse Analytics'],
    e: [['• Vision', '• Speech', '• Language', '• Decision', '• Search']],
  },

  615: {
    q: [
      'Dịch vụ nào dưới đây dùng quy tắc chiều vào và chiều ra để lọc lưu lượng mạng đi tới và đi từ tài nguyên',
      'Azure kết nối vào Azure Virtual Network?',
    ],
    o: [
      'Public Load Balancer',
      'Internal Load Balancer',
      'Application Security Group',
      'Network Security Group',
    ],
  },

  616: {
    q: ['Dùng dịch vụ nào để cấu hình bảo mật mạng như một phần mở rộng theo cấu trúc của ứng dụng?'],
    o: [
      'Public Load Balancer',
      'Internal Load Balancer',
      'Application Security Group',
      'Network Security Group',
    ],
  },

  617: {
    q: ['Triển khai giải pháp bằng Azure Container Instances buộc bạn phải quản lý máy ảo.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  618: {
    q: [
      'Azure App Service là dịch vụ nền HTTP dùng để chạy ứng dụng web, REST API và',
      'backend cho ứng dụng di động.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  619: {
    q: [
      'High Availability chỉ khả năng giữ cho dịch vụ chạy liên tục trong thời gian dài, trong khi',
      'thời gian ngừng hoạt động rất ít hoặc không có.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  620: {
    q: [
      'Dịch vụ nào dưới đây là dịch vụ bảo mật mạng có quản lý của Microsoft trên Azure, bảo vệ tài nguyên',
      'trong Azure Virtual Network?',
    ],
    o: ['Azure Bastion', 'Azure Firewall', 'Application Security Group', 'Azure Sentinel'],
  },

  621: {
    q: [
      'Công ty bạn muốn chuyển web server và database server lên Microsoft Azure. Sơ đồ',
      'kiến trúc như hình dưới.',
      'Bạn phải bảo đảm có các giới hạn lưu lượng để database server chỉ liên lạc được',
      'với web server.',
      'Bạn sẽ khuyến nghị dùng thứ nào sau đây để áp dụng những giới hạn đó?',
    ],
    o: [
      'Network Security Group (NSG)',
      'Application Security Group',
      'Một Local Network Gateway',
      'Một Virtual Private Gateway',
    ],
  },

  622: {
    q: [
      'Dịch vụ Azure nào hiển thị hoạt động gần đây của máy ảo, bao gồm mọi thay đổi cấu hình',
      'và thời điểm máy ảo bị dừng hay được khởi động?',
    ],
    o: ['Azure Monitor', 'Activity Log', 'Azure Advisor', 'Azure Agent'],
  },

  623: {
    q: ['Bạn xem được Activity log trong Azure portal.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  624: {
    q: [
      'Một công ty dự định dùng Azure Synapse Analytics để lưu dữ liệu bán hàng trong quá khứ. Thứ nào',
      'sau đây là một tính năng của kiến trúc Azure Synapse SQL?',
    ],
    o: ['High Availability', 'Scalability', 'Disaster Recovery', 'Visualization'],
  },

  625: {
    q: [
      'Bạn tạo được một diagnostic setting để gửi Activity Log tới một Log Analytics workspace, nơi bạn',
      'xem được sự kiện theo thời gian hoặc phân tích chúng cùng với dữ liệu thu thập khác.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  626: {
    q: ['Bạn thu thập được dữ liệu nguồn Windows event log bằng Log Analytics agent.'],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  627: {
    q: [
      'Công ty bạn có nhiều tài nguyên đặt trên Azure. Họ muốn có một giải pháp toàn diện',
      'để thu thập, phân tích và hành động dựa trên dữ liệu đo từ đám mây Azure.',
      'Bạn sẽ dùng dịch vụ nào sau đây cho yêu cầu này?',
    ],
    o: ['Azure Event Hubs', 'Azure Analysis Services', 'Azure Advisor', 'Azure Monitor'],
    e: [
      [
        'Azure Monitor mang tới giải pháp toàn diện để thu thập, phân tích và',
        'hành động dựa trên dữ liệu đo từ môi trường đám mây lẫn tại chỗ của bạn.',
        'Nhờ đó nó tối đa hoá tính sẵn sàng và hiệu năng cho ứng dụng cùng dịch vụ',
        'của bạn.',
      ],
    ],
  },

  628: {
    q: [
      'Công ty bạn muốn dùng Azure Storage Account. Họ có yêu cầu sau:',
      'Storage Account phải tự động nhân bản dữ liệu sang region phụ.',
      'Giải pháp: Cấu hình Read-Access Geo-Redundant Storage Account vì nó tự động nhân bản dữ liệu',
      'sang region phụ.',
      'Giải pháp này có đạt yêu cầu không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  629: {
    q: [
      'Một công ty muốn bảo đảm người dùng trong công ty được xác thực khi truy cập',
      'tài nguyên khai báo trong tài khoản Microsoft Azure của họ. Đâu là định nghĩa đúng của',
      'authentication?',
    ],
    o: [
      'Nó chỉ ra loại dịch vụ bạn dùng được trên Azure',
      'Nó chỉ ra loại dữ liệu bạn dùng được trên Azure',
      'Đó là hành động cung cấp thông tin đăng nhập hợp lệ',
      'Nó chỉ ra bạn được làm gì trên Azure',
    ],
    e: [
      [
        'Vì authentication là quá trình chứng minh bạn đúng là người bạn nói mình là.',
        'Authentication đôi khi được viết tắt là AuthN.',
      ],
    ],
  },

  631: {
    q: [
      'Bạn cần cấu hình một giải pháp Azure đáp ứng các yêu cầu sau:',
      'Bảo vệ website khỏi bị tấn công -',
      '•',
      'Tạo báo cáo chứa chi tiết các lần bị tấn công',
      '•',
      'Bạn nên đưa gì vào giải pháp?',
    ],
    o: [
      'Azure Firewall',
      'một network security group (NSG)',
      'Azure Information Protection',
      'DDoS protection',
    ],
    e: [
      [
        'DDoS là kiểu tấn công nhằm vắt kiệt tài nguyên của ứng dụng. Mục tiêu là',
        'ảnh hưởng tới tính sẵn sàng của ứng dụng và khả năng xử lý các yêu cầu hợp lệ.',
      ],
    ],
  },

  632: {
    q: [
      'Một công ty muốn tạo nhiều kho dữ liệu trên Microsoft Azure. Họ muốn có những tầng lưu trữ',
      'dùng để lưu dữ liệu ít khi dùng tới.',
      'Tầng lưu trữ nào của Azure Blob storage phù hợp với kiểu yêu cầu này?',
      'Chọn 2 đáp án trong các phương án dưới đây.',
    ],
    o: [
      'Premium storage',
      'Hot storage',
      'Cool storage',
      'Archive storage — Hot: tối ưu cho việc lưu dữ liệu được truy cập thường xuyên.',
    ],
    e: [
      [
        'Cool: tối ưu cho việc lưu dữ liệu ít được truy cập và giữ tối thiểu 30 ngày.',
        'Archive: tối ưu cho việc lưu dữ liệu hiếm khi truy cập và giữ tối thiểu 180 ngày, với',
        'yêu cầu độ trễ linh hoạt (cỡ vài giờ).',
      ],
    ],
  },

  633: {
    q: [
      'Một kỹ sư CNTT cần tạo một máy ảo trên Microsoft Azure. Hiện kỹ sư này chỉ có một',
      'máy trạm chạy hệ điều hành Android.',
      'Kỹ sư đó dùng được thứ nào sau đây để tạo máy ảo mong muốn trên Azure?',
    ],
    o: ['Microsoft PowerApps', 'Azure Cloud Shell', 'Azure PowerShell', 'Azure CLI'],
  },

  634: {
    q: [
      'Công ty bạn dự định dùng Azure AD để xác thực cho các tài nguyên khai báo trên Azure.',
      'Azure AD có sẵn khả năng bảo mật cho việc xác thực và phân quyền truy cập tài nguyên không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Active Directory (Azure AD) là dịch vụ quản lý danh tính và truy cập trên đám mây của Microsoft,',
        'giúp nhân viên của bạn đăng nhập và truy cập tài nguyên như Microsoft Office 365,',
        'Azure portal và hàng nghìn ứng dụng SaaS khác, với các khả năng tích hợp sẵn để bảo mật cả',
        'việc xác thực lẫn phân quyền.',
      ],
    ],
  },

  635: {
    q: [
      'Một công ty dự định lập một tài khoản Azure miễn phí. Gói hỗ trợ Basic có đi kèm',
      'tài khoản Azure miễn phí không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  636: {
    q: [
      'Một công ty dự định dùng tài khoản Microsoft Azure miễn phí để chạy tài nguyên phục vụ môi trường',
      'chạy thật. Tài khoản Azure miễn phí có cho phép chạy tài nguyên môi trường thật không?',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
  },

  637: {
    q: ['Bạn có thể dùng khoản credit 200 USD của mình cho các ưu đãi trên Azure Marketplace không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Credit của bạn không áp dụng được cho ưu đãi trên Azure Marketplace. Tuy nhiên, nhiều đối tác',
        'trên Azure Marketplace có bản dùng thử miễn phí và/hoặc gói miễn phí cho giải pháp của họ.',
      ],
    ],
  },

  638: {
    q: ['Bạn có thể dùng credit của mình cho Azure Spot Virtual Machines không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Nhưng sau khi dùng hết credit, bạn chuyển sang pay-as-you-go và mua được Spot Virtual Machine với',
        'mức chiết khấu rất sâu so với giá pay-as-you-go của máy ảo.',
      ],
    ],
  },

  639: {
    q: ['Bạn có dùng được Azure Hybrid Benefit trong tài khoản Azure miễn phí không?'],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Azure Hybrid Benefit không kết hợp được với khoản credit miễn phí. Nếu bạn chuyển sang giá',
        'pay-as-you-go khi hết 30 ngày đầu hoặc sau khi tiêu hết credit, khi đó bạn sẽ dùng được',
        'Azure Hybrid Benefit.',
      ],
    ],
  },

  640: {
    q: [
      'Geo-redundant storage (GRS) nhân bản thông tin sang một nơi phụ, qua nhiều data center',
      'cách nhau hàng nghìn kilômét.',
    ],
    s: [{ p: '', o: ['Yes', 'No'] }],
    e: [
      [
        'Điều này đúng, vì GRS nhân bản được dữ liệu từ nguồn chính và chuyển sang nguồn phụ',
        'ngay cả khi hai nơi cách xa nhau.',
      ],
    ],
  },
};
