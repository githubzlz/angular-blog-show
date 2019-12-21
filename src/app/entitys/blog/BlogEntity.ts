import { TagEntity } from './TagEntity';
import { TypeEntity } from './TypeEntity';


export class BlogEntity{

    /** id */
    public id:String;

    /** 标题 */
    public title:String;

    /** 摘要 */
    public summary:String;

    /** 内容 */
    public content:any;

    /** 作者 */
    public author:String;

    /** 星星数 */
    public stars:number;

    /** 点赞数 */
    public goods:number;

    /** 评论数量 */
    public comments:number;

    /** 访问量 */
    public reads:number;

    /** 收藏量 */
    public collect:number;

    /** 最后修改时间 */
    public latModifiedTime:String;

    /** 标签 */
    public tags:TagEntity[];

    /** 分类 */
    public types:TypeEntity[];

}