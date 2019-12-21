import { Injectable } from '@angular/core';
import { PageInfo } from 'src/app/entitys/common/PageInfo';
import { BlogEntity } from 'src/app/entitys/blog/BlogEntity';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor() { }

  


  getIndexList(type:String, pageInfo:PageInfo){
    
    pageInfo.list = this.blogs;

    return pageInfo;
  };


  /**假数据 */
  public blogs:BlogEntity[] = [
    { 
      id:'1',
      title:'GIT的开源项目',
      summary:'GIT的开源项目',
      content:'开源，不仅让TDengine获得了市场的认知，而且让产品的质量得到了前所未有的提升。虽然在开源之前，我们做了'+
              '大量的测试，而且好几个大的客户已经正式上线，但由于每个用户的场景不一样，开源后，TDengine仍然暴露出了很多问题'+
              '，在GitHub上递交的问题数量已经超过1000。如果没有开源，这些问题则需要积累更多的客户，',
      author:'朱林忠',
      stars:10,
      goods:108,
      comments:13,
      reads:562,
      collect:4,
      latModifiedTime:'2019-12-20 12:23:23',
      tags:[
        { name:'java' },
        { name:'技术' },
        { name:'产品' },
      ],
      types:[
        { name:'java' },
        { name:'mysql' }
      ],
    },{
      id:'2',
      title:'产品的发行',
      summary:'这是一片很好的草原',
      content:'我参加了太多的活动。无论规模大小，无论线上线下，在介绍产品时，我总是'+
      '满怀激情。很多人好奇，问我如何能做到这一点。其实，没有什么“灵丹妙药”，唯一就是要'+
      '对自己研发的产品特别热爱，对产品有足够的信心。',
      author:'朱林忠',
      stars:10,
      goods:108,
      comments:13,
      reads:562,
      collect:4,
      latModifiedTime:'2019-12-20 12:23:23',
      tags:[
        { name:'java' },
        { name:'技术' }
      ],
      types:[
        { name:'java' },
        { name:'mysql' }
      ],
    },{
      id:'3',
      title:'招投标法律规定',
      summary:'招投标法律规定',
      content:'团队的90后江燚、80后李广、以及其他团队成员，甚至我们不爱说话的廖博士，受我的影响，每次介绍产品，也都是激情澎湃，信心满满。三年的努力，我终于成功地将我个人的激情转化为了整个团队的激情，也希望我们团队在扩充到一百人、一千人之后，这股激情依然不减。',
      author:'朱林忠',
      stars:10,
      goods:108,
      comments:13,
      reads:562,
      collect:4,
      latModifiedTime:'2019-12-20 12:23:23',
      tags:[
        { name:'技术' },
        { name:'招标' }
      ],
      types:[
        { name:'java' },
        { name:'mysql' }
      ],
    },{
      id:'4',
      title:'底层软件的销售',
      summary:'底层软件的销售',
      content:'开源，不仅让TDengine获得了市场的认知，而且让产品的质量得到了前所未有的提升。虽然在开源之前，我们做了'+
              '大量的测试，而且好几个大的客户已经正式上线，但由于每个用户的场景不一样，开源后，TDengine仍然暴露出了很多问题'+
              '，在GitHub上递交的问题数量已经超过1000。如果没有开源，这些问题则需要积累更多的客户，',
      author:'朱林忠',
      stars:10,
      goods:108,
      comments:13,
      reads:562,
      collect:4,
      latModifiedTime:'2019-12-20 12:23:23',
      tags:[
        { name:'java' },
        { name:'技术' }
      ],
      types:[
        { name:'java' },
        { name:'mysql' }
      ],
    },
  ];









}
