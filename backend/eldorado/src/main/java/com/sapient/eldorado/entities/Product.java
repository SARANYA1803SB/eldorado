package com.sapient.eldorado.entities;

import java.io.Serializable;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "product_details")
public class Product implements Serializable{
	@Id
	private String id;
	private String name;
	private String desc;
	private String category;
	private String price;
	private String quantity;
	private String imageLinks;
	private String videoLinks;
	private String pdfLink;
	
	public Product() {
	}
	
	public Product(String name, String desc, String category, String price, String quantity, String imageLinks,
			String videoLinks, String pdfLink) {
		super();
		this.name = name;
		this.desc = desc;
		this.category = category;
		this.price = price;
		this.quantity = quantity;
		this.imageLinks = imageLinks;
		this.videoLinks = videoLinks;
		this.pdfLink = pdfLink;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
	public String getImageLinks() {
		return imageLinks;
	}
	public void setImageLinks(String imageLinks) {
		this.imageLinks = imageLinks;
	}
	public String getVideoLinks() {
		return videoLinks;
	}
	public void setVideoLinks(String videoLinks) {
		this.videoLinks = videoLinks;
	}
	public String getPdfLink() {
		return pdfLink;
	}
	public void setPdfLink(String pdfLink) {
		this.pdfLink = pdfLink;
	}
	@Override
	public String toString() {
		return "Product [id="+id +", name=" + name + ", desc=" + desc + ", category=" + category + ", price=" + price
				+ ", quantity=" + quantity + ", imageLinks=" + imageLinks + ", videoLinks=" + videoLinks + ", pdfLink="
				+ pdfLink + "]";
	}

}
